import { Injectable, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/publish';

const itemClick$ = new ReplaySubject(1);
const addItems$ = new ReplaySubject(1);
const navigateHome$ = new ReplaySubject(1);
const getSelectedItem$ = new ReplaySubject(1);
const itemSelect$ = new ReplaySubject(1);
const itemHover$ = new ReplaySubject(1);
const submenuToggle$ = new ReplaySubject(1);

/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
export abstract class MenuItem {
  /**
   * Item Title
   * @type {string}
   */
  title: string;
  /**
   * Item relative link (for routerLink)
   * @type {string}
   */
  link?: string;
  /**
   * Item URL (absolute)
   * @type {string}
   */
  url?: string;
  /**
   * Icon class name
   * @type {string}
   */
  icon?: string;
  /**
   * Expanded by defaul
   * @type {boolean}
   */
  expanded?: boolean;
  /**
   * Children items
   * @type {List<MenuItem>}
   */
  children?: MenuItem[];
  /**
   * HTML Link target
   * @type {string}
   */
  target?: string;
  /**
   * Hidden Item
   * @type {boolean}
   */
  hidden?: boolean;
  /**
   * Item is selected when partly or fully equal to the current url
   * @type {string}
   */
  pathMatch?: string = 'full'; // TODO: is not set if item is initialized by default, should be set anyway
  /**
   * Where this is a home item
   * @type {boolean}
   */
  home?: boolean;
  /**
   * Whether the item is just a group (non-clickable)
   * @type {boolean}
   */
  group?: boolean;
  parent?: MenuItem;
  selected?: boolean;
  data?: any;
  fragment?: string;
}

// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
@Injectable()
export class MenuService {

  /**
   * Add items to the end of the menu items list
   * @param {List<MenuItem>} items
   * @param {string} tag
   */
  addItems(items: MenuItem[], tag?: string) {
    addItems$.next({ tag, items });
  }

  /**
   * Navigate to the home menu item
   * @param {string} tag
   */
  navigateHome(tag?: string) {
    navigateHome$.next({ tag });
  }

  /**
   * Returns currently selected item. Won't subscribe to the future events.
   * @param {string} tag
   * @returns {Observable<{tag: string; item: MenuItem}>}
   */
  getSelectedItem(tag?: string): Observable<any> {
    const listener = new BehaviorSubject<{}>(null);

    getSelectedItem$.next({ tag, listener });

    return listener.asObservable();
  }

  onItemClick(): Observable<any> {
    return itemClick$.publish().refCount();
  }

  onItemSelect(): Observable<any> {
    return itemSelect$.publish().refCount();
  }

  onItemHover(): Observable<any> {
    return itemHover$.publish().refCount();
  }

  onSubmenuToggle(): Observable<any> {
    return submenuToggle$.publish().refCount();
  }
}

@Injectable()
export class MenuInternalService {
  private items: MenuItem[] = [];

  constructor(private router: Router, private location: Location) {
    this.items = [];
  }

  getItems(): MenuItem[] {
    return this.items;
  }

  prepareItems(items: MenuItem[]) {
    items.forEach(i => this.setParent(i));
    items.forEach(i => this.prepareItem(i));
  }

  resetItems(items: MenuItem[]) {
    items.forEach(i => this.resetItem(i));
  }

  collapseAll(items: MenuItem[], except?: MenuItem) {
    items.forEach(i => this.collapseItem(i, except));
  }

  onAddItem(): Observable<any> {
    return addItems$.publish().refCount();
  }

  onNavigateHome(): Observable<any> {
    return navigateHome$.publish().refCount();
  }

  onGetSelectedItem(): Observable<any> {
    return getSelectedItem$.publish().refCount();
  }

  itemHover(item: MenuItem, tag?: string) {
    itemHover$.next({ tag, item });
  }

  submenuToggle(item: MenuItem, tag?: string) {
    submenuToggle$.next({ tag, item });
  }

  itemSelect(item: MenuItem, tag?: string) {
    itemSelect$.next({ tag, item });
  }

  itemClick(item: MenuItem, tag?: string) {
    itemClick$.next({ tag, item });
  }

  private resetItem(item: MenuItem) {
    item.selected = false;

    item.children && item.children.forEach(child => {
      this.resetItem(child);
    });
  }

  private collapseItem(item: MenuItem, except?: MenuItem) {
    if (except && item === except) {
      return;
    }
    item.expanded = false;

    item.children && item.children.forEach(child => {
      this.collapseItem(child);
    });
  }

  private setParent(item: MenuItem) {
    item.children && item.children.forEach(child => {
      child.parent = item;
      this.setParent(child);
    });
  }

  private prepareItem(item: MenuItem) {
    item.selected = false;

    const exact: boolean = item.pathMatch === 'full';
    const location: string = this.location.path();

    if ((exact && location === item.link) || (!exact && location.includes(item.link))
      || (exact && item.fragment && location.substr(location.indexOf('#') + 1).includes(item.fragment))) {

      item.selected = true;
      this.selectParent(item);
    }

    item.children && item.children.forEach(child => {
      this.prepareItem(child);
    });
  }

  private selectParent(item: MenuItem) {
    const parent = item.parent;
    if (parent) {
      parent.selected = true;
      parent.expanded = true;
      this.selectParent(parent);
    }
  }
}
