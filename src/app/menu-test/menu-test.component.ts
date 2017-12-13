import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/operator/takeWhile';
import { MenuService, MenuItem } from '@avanade/theme';

@Component({
  selector: 'nb-menu-item1',
  template: `
    <h1>Menu Item #1</h1>
  `,
})
export class NbMenuItem1Component { }

@Component({
  selector: 'nb-menu-item2',
  template: `
    <h1>Menu Item #2</h1>
  `,
})
export class NbMenuItem2Component { }

@Component({
  selector: 'nb-menu-item3',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NbMenuItem3Component { }

@Component({
  selector: 'nb-menu-item31',
  template: `
    <h1>Menu Item #3.1</h1>
  `,
})
export class NbMenuItem31Component { }

@Component({
  selector: 'nb-menu-item32',
  template: `
    <h1>Menu Item #3.2</h1>
  `,
})
export class NbMenuItem32Component { }

@Component({
  selector: 'nb-menu-item33',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class NbMenuItem33Component { }

@Component({
  selector: 'nb-menu-item331',
  template: `
    <h1>Menu Item #3.3.1</h1>
  `,
})
export class NbMenuItem331Component { }

@Component({
  selector: 'nb-menu-item332',
  template: `
    <h1>Menu Item #3.3.2</h1>
  `,
})
export class NbMenuItem332Component { }

@Component({
  selector: 'nb-menu-item4',
  template: `
    <h1>Menu Item #4</h1>
  `,
})
export class NbMenuItem4Component { }

@Component({
  selector: 'nb-menu-test',
  template: `
    <layout-page>
      <layout-column>
        <box size="medium">
          <box-body>
            <menu-layout tag="firstMenu" [items]="menuItems"></menu-layout>
            <router-outlet></router-outlet>
            <button class="btn btn-primary" id="addBtn" (click)="addMenuItem()">Add</button>
            <button class="btn btn-primary" id="homeBtn" (click)="navigateHome()">Home</button>
          </box-body>
        </box>
      </layout-column>
    </layout-page>
  `,
})
export class NbMenuTestComponent implements OnInit, OnDestroy {
  menuItems = [
    {
      title: 'Menu Items',
      group: true,
    },
    {
      title: 'Menu #1',
      link: '/menu/1',
    },
    {
      title: 'Menu #2',
      link: '/menu/2',
    },
  ];

  private alive: boolean = true;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService
      .onItemClick()
      .takeWhile(() => this.alive)
      .subscribe((data: { tag: string; item: MenuItem }) => console.info(data));

    this.menuService
      .onItemSelect()
      .takeWhile(() => this.alive)
      .subscribe((data: { tag: string; item: MenuItem }) => console.info(data));

    // this.itemHoverSubscription = this.menuService.onItemHover()
    //   .subscribe((data: { tag: string, item: MenuItem }) => console.info(data));

    this.menuService
      .onSubmenuToggle()
      .takeWhile(() => this.alive)
      .subscribe((data: { tag: string; item: MenuItem }) => console.info(data));

    this.menuService.addItems(
      [
        {
          title: 'Menu #3',
          children: [
            {
              title: 'Menu #3.1',
              link: '/menu/3/1',
            },
            {
              title: 'Menu #3.2',
              link: '/menu/3/2',
            },
            {
              title: 'Menu #3.3',
              children: [
                {
                  title: 'Menu #3.3.1',
                  link: '/menu/3/3/1',
                },
                {
                  title: 'Menu #3.3.2',
                  link: '/menu/3/3/2',
                  home: true,
                },
                {
                  title: '@avanade/theme',
                  target: '_blank',
                  url: '',
                },
              ],
            },
          ],
        },
      ],
      'firstMenu',
    );
  }

  ngOnDestroy() {
    this.alive = false;
  }

  addMenuItem() {
    this.menuService.addItems([{ title: 'New Menu Item' }], 'firstMenu');
  }

  navigateHome() {
    this.menuService.navigateHome('firstMenu');
  }
}
