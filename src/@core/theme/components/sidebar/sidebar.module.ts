import { NgModule, ModuleWithProviders } from '@angular/core';

import { NbSharedModule } from '../shared/shared.module';

import {
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
} from './sidebar.component';

import { SidebarService } from './sidebar.service';

const SIDEBAR_COMPONENTS = [
  SidebarHeaderComponent,
  SidebarComponent,
  SidebarFooterComponent
];

const SIDEBAR_PROVIDERS = [
  SidebarService
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    SIDEBAR_COMPONENTS,
  ],
  exports: [
    SIDEBAR_COMPONENTS,
  ],
})
export class NbSidebarModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NbSidebarModule,
      providers: [
        SIDEBAR_PROVIDERS
      ],
    };
  }
}
