import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import {
  LayoutModule,
  BoxModule,
  NbActionsModule,
  NbMenuItem,
  NbMenuModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSidebarModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
} from '@avanade/theme';

import { NbLayoutTestComponent } from './layout-test/layout-test.component';
import { NbLayoutHeaderTestComponent } from './layout-test/layout-header-test.component';
import { NbLayoutFooterTestComponent } from './layout-test/layout-footer-test.component';
import { NbThemeChangeTestComponent } from './layout-test/theme-change-test.component';
import { NbThemeBreakpointTestComponent } from './layout-test/theme-breakpoint-test.component';
import { NbTabsetTestComponent } from './tabset-test/tabset-test.component';
import {
  NbRouteTabsetTestChild1Component,
  NbRouteTabsetTestChild2Component,
  NbRouteTabsetTestComponent,
} from './route-tabset-test/route-tabset-test.component';

import { NbSidebarTestComponent } from './sidebar-test/sidebar-test.component';
import { NbSidebarTestOneComponent } from './sidebar-test/sidebar-test-one.component';
import { NbSidebarTestTwoComponent } from './sidebar-test/sidebar-test-two.component';
import { NbSidebarTestThreeComponent } from './sidebar-test/sidebar-test-three.component';
import {
  NbMenuItem1Component,
  NbMenuItem2Component,
  NbMenuItem31Component,
  NbMenuItem32Component,
  NbMenuItem331Component,
  NbMenuItem332Component,
  NbMenuItem33Component,
  NbMenuItem3Component,
  NbMenuItem4Component,
  NbMenuTestComponent,
} from './menu-test/menu-test.component';
import { NbUserTestComponent } from './user-test/user-test.component';
import { NbDynamicToAddComponent, NbThemeDynamicTestComponent } from './layout-test/theme-dynamic-test.component';
import { NbActionsTestComponent } from './actions-test/actions-test.component';
import { NbBootstrapTestComponent } from './bootstrap-test/bootstrap-test.component';

import { NbSearchTestComponent } from './search-test/search-test.component';
import { NbFormsTestComponent } from './forms-test/forms-test.component';

import { NbCardTestComponent } from './card-test/card-test.component';

const TEST_COMPONENTS = [
  AppComponent,
  NbCardTestComponent,
  NbLayoutTestComponent,
  NbLayoutHeaderTestComponent,
  NbLayoutFooterTestComponent,
  NbTabsetTestComponent,
  NbSidebarTestComponent,
  NbSidebarTestOneComponent,
  NbSidebarTestTwoComponent,
  NbSidebarTestThreeComponent,
  NbRouteTabsetTestComponent,
  NbRouteTabsetTestChild1Component,
  NbRouteTabsetTestChild2Component,
  NbMenuTestComponent,
  NbMenuItem1Component,
  NbMenuItem2Component,
  NbMenuItem3Component,
  NbMenuItem31Component,
  NbMenuItem32Component,
  NbMenuItem33Component,
  NbMenuItem331Component,
  NbMenuItem332Component,
  NbMenuItem4Component,
  NbUserTestComponent,
  NbThemeChangeTestComponent,
  NbSearchTestComponent,
  NbBootstrapTestComponent,
  NbDynamicToAddComponent,
  NbThemeDynamicTestComponent,
  NbThemeBreakpointTestComponent,
  NbActionsTestComponent,
  NbFormsTestComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, { useHash: true }),
    NbThemeModule.forRoot({ name: 'default' }),
    LayoutModule,
    BoxModule,
    NbMenuModule.forRoot(),
    NbMenuModule.forRoot(),
    NbRouteTabsetModule,
    NbSidebarModule.forRoot(),
    NbTabsetModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
  ],
  declarations: [
    TEST_COMPONENTS
  ],
  entryComponents: [
    NbDynamicToAddComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
