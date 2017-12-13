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
    ...SIDEBAR_COMPONENTS,
  ],
  exports: [
    ...SIDEBAR_COMPONENTS,
  ],
})
export class SidebarModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SidebarModule,
      providers: [
        ...SIDEBAR_PROVIDERS
      ],
    };
  }
}
