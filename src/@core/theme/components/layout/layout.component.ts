import {
  AfterViewInit, Component, ComponentFactoryResolver, ElementRef, HostBinding, HostListener, Input, OnDestroy,
  Renderer2, ViewChild, ViewContainerRef, OnInit,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeWhile';

import { convertToBoolProperty } from '../helpers';
import { NbThemeService } from '../../services/theme.service';
import { NbSpinnerService } from '../../services/spinner.service';


/**
 * The general Nebular component-container.
 * It is required that all children component of the framework are located inside of the layout.
 *
 * Can contain the following components inside:
 *
 * ```
 * layout-header
 * layout-column
 * sidebar
 * layout-footer
 * ```
 *
 * By default the layout fills up the full view-port.
 * The window scrollbars are disabled on the body and moved inside of the layout, so that the scrollbars
 * won't mess with the fixed header.
 *
 * The children components are projected into the flexible layout structure allowing to adjust the layout behavior
 * based on the settings provided.
 *
 * The layout content (columns) becomes centered when the window width is more than
 * the value specified in the theme variable `layout-content-width`.
 *
 * The layout also contains the area on the very top (the first child of the layout), which could be used
 * to dynamically append some components like modals or spinners/loaders
 * so that they are located on top of the elements hierarchy.
 * More details are below under the `ThemeService` section.
 *
 * The layout component is also responsible for changing of the application themes.
 * It listens to the `themeChange` event and change the theme CSS class appended to body.
 * Based on the class appended a specific CSS-theme is applied to the application.
 * More details of the Theme System could be found here [Enabling Theme System](#/docs/concepts/theme-system)
 *
 * @example A simple layout example:
 *
 * ```
 * <layout-page>
 *   <layout-header>Great Company</layout-header>
 *
 *   <layout-column>
 *     Hello World!
 *   </layout-column>
 *
 *   <layout-footer>Contact us</layout-footer>
 * </layout-page>
 * ```
 *
 * @example For example, it is possible to ask the layout to center the columns (notice: we added a `center` attribute
 * to the layout:
 *
 * ```
 * <layout center>
 *   <layout-header>Great Company</layout-header>
 *
 *   <layout-column>
 *     Content
 *   </layout-column>
 *
 *   <layout-footer>Contact us</layout-footer>
 * </layout-page>
 * ```
 *
 * @styles
 *
 * layout-font-family
 * layout-font-size
 * layout-line-height
 * layout-fg
 * layout-bg
 * layout-min-height
 * layout-content-width
 * layout-window-mode-min-width
 * layout-window-mode-max-width: window mode only, after this value layout turns into floating window
 * layout-window-mode-bg: window mode only, background
 * layout-window-mode-padding-top: window mode only, max padding from top
 * layout-window-shadow: window mode shadow
 * layout-padding
 * layout-medium-padding
 * layout-small-padding
 */
@Component({
  selector: 'layout-page',
  styleUrls: ['./layout.component.scss'],
  template: `
    <ng-template #layoutTopDynamicArea></ng-template>
    <div class="scrollable-container" #scrollableContainer>
      <div class="layout">
        <ng-content select="layout-header"></ng-content>
        <div class="layout-container">
          <ng-content select="sidebar-layout"></ng-content>
          <div class="content" [class.center]="centerValue">
            <div class="columns">
              <ng-content select="layout-column"></ng-content>
            </div>
            <ng-content select="layout-footer"></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class LayoutPageComponent implements AfterViewInit, OnInit, OnDestroy {

  centerValue: boolean = false;

  @HostBinding('class.window-mode') windowModeValue: boolean = false;
  @HostBinding('class.with-scroll') withScrollValue: boolean = false;

  /**
   * Defines whether the layout columns will be centered after some width
   * @param {boolean} val
   */
  @Input()
  set center(val: boolean) {
    this.centerValue = convertToBoolProperty(val);
  }

  /**
   * Defines whether the layout enters a 'window' mode, when the layout content (including sidebars and fixed header)
   * becomes centered by width with a margin from the top of the screen, like a floating window.
   * Automatically enables `withScroll` mode, as in the window mode scroll must be inside the layout and cannot be on
   * window. (TODO: check this)
   * @param {boolean} val
   */
  @Input()
  set windowMode(val: boolean) {
    this.windowModeValue = convertToBoolProperty(val);
    this.withScroll = true;
  }

  /**
   * Defines whether to move the scrollbars to layout or leave it at the body level.
   * Automatically set to true when `windowMode` is enabled.
   * @param {boolean} val
   */
  @Input()
  set withScroll(val: boolean) {
    this.withScrollValue = convertToBoolProperty(val);

    const body = document.getElementsByTagName('body')[0];
    if (this.withScrollValue) {
      this.renderer.setStyle(body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(body, 'overflow', 'initial');
    }
  }

  @ViewChild('layoutTopDynamicArea', { read: ViewContainerRef }) veryTopRef: ViewContainerRef;
  @ViewChild('scrollableContainer', { read: ElementRef }) scrollableContainerRef: ElementRef;

  protected afterViewInit$ = new BehaviorSubject(null);

  private alive: boolean = true;

  constructor(
    protected themeService: NbThemeService,
    protected spinnerService: NbSpinnerService,
    protected componentFactoryResolver: ComponentFactoryResolver,
    protected elementRef: ElementRef,
    protected renderer: Renderer2,
    protected router: Router,
  ) {

    this.themeService.onThemeChange()
      .takeWhile(() => this.alive)
      .subscribe((theme) => {
        const body = document.getElementsByTagName('body')[0];
        if (theme.previous) {
          this.renderer.removeClass(body, `nb-theme-${theme.previous}`);
        }
        this.renderer.addClass(body, `nb-theme-${theme.name}`);
      });

    this.themeService.onAppendLayoutClass()
      .takeWhile(() => this.alive)
      .subscribe((className) => {
        this.renderer.addClass(this.elementRef.nativeElement, className);
      });

    this.themeService.onRemoveLayoutClass()
      .takeWhile(() => this.alive)
      .subscribe((className) => {
        this.renderer.removeClass(this.elementRef.nativeElement, className);
      });

    this.spinnerService.registerLoader(new Promise((resolve, reject) => {
      this.afterViewInit$
        .takeWhile(() => this.alive)
        .subscribe((_) => resolve());
    }));
    this.spinnerService.load();

    // trigger first time so that after the change we have the initial value
    this.themeService.changeWindowWidth(window.innerWidth);
  }

  ngAfterViewInit() {
    this.themeService.onAppendToTop()
      .takeWhile(() => this.alive)
      .subscribe((data: { component: any, listener: Subject<any> }) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(data.component);
        const componentRef = this.veryTopRef.createComponent(componentFactory);
        data.listener.next(componentRef);
        data.listener.complete();
      });

    this.themeService.onClearLayoutTop()
      .takeWhile(() => this.alive)
      .subscribe((data: { listener: Subject<any> }) => {
        this.veryTopRef.clear();
        data.listener.next(true);
      });

    this.afterViewInit$.next(true);
  }

  ngOnInit() {
    this.initScrollTop();
  }

  ngOnDestroy() {
    this.themeService.clearLayoutTop();
    this.alive = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.themeService.changeWindowWidth(event.target.innerWidth);
  }

  private initScrollTop() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .takeWhile(() => this.alive)
      .subscribe(() => {
        this.scrollableContainerRef.nativeElement.scrollTo && this.scrollableContainerRef.nativeElement.scrollTo(0, 0);
      });
  }
}

/**
 * A container component which determines a content position inside of the layout.
 * The layout could contain unlimited columns (not including the sidebars).
 *
 * @example By default the columns are ordered from the left to the right,
 * but it's also possible to overwrite this behavior by setting a `left` attribute to the column,
 * moving it to the very first position:
 * ```
 * <layout-page>
 *   <layout-column>Second</layout-column>
 *   <layout-column>Third</layout-column>
 *   <layout-column left>First</layout-column>
 * </layout-page>
 * ```
 */
@Component({
  selector: 'layout-column',
  template: `
    <ng-content></ng-content>
  `,
})
export class LayoutColumnComponent {

  @HostBinding('class.left') leftValue: boolean;

  /**
   * Move the column to the very left position in the layout.
   * @param {boolean} val
   */
  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }
}

/**
 * Page header component.
 * Located on top of the page above the layout columns and sidebars.
 * Could be made `fixed` by setting the corresponding property. In the fixed mode the header becomes
 * sticky to the top of the layout (to of the page).
 *
 * @styles
 *
 * header-font-family
 * header-line-height
 * header-fg
 * header-bg
 * header-height
 * header-padding
 * header-shadow
 */
@Component({
  selector: 'layout-header',
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
})
export class LayoutHeaderComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  /**
   * Makes the header sticky to the top of the layout.
   * @param {boolean} val
   */
  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }
}

/**
 * Page footer.
 * Located under the layout content (specifically, under the columns).
 * Could be made `fixed`, becoming sticky to the bottom of the view port (window).
 *
 * @styles
 *
 * footer-height
 * footer-padding
 * footer-fg
 * footer-bg
 * footer-separator
 * footer-shadow
 */
@Component({
  selector: 'layout-footer',
  template: `
    <nav [class.fixed]="fixedValue">
      <ng-content></ng-content>
    </nav>
  `,
})
export class LayoutFooterComponent {

  @HostBinding('class.fixed') fixedValue: boolean;

  /**
   * Makes the footer sticky to the bottom of the window.
   * @param {boolean} val
   */
  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

}
