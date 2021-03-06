import { NgModule, ModuleWithProviders } from '@angular/core';

import { NbSharedModule } from '../shared/shared.module';

import {
  NbSidebarComponent,
  NbSidebarFooterComponent,
  NbSidebarHeaderComponent,
} from './sidebar.component';

import { NbSidebarService } from './sidebar.service';

const NB_SIDEBAR_COMPONENTS = [
  NbSidebarComponent,
  NbSidebarFooterComponent,
  NbSidebarHeaderComponent,
];

const NB_SIDEBAR_PROVIDERS = [
  NbSidebarService,
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    ...NB_SIDEBAR_COMPONENTS,
  ],
  exports: [
    ...NB_SIDEBAR_COMPONENTS,
  ],
})
export class NbSidebarModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NbSidebarModule,
      providers: [
        ...NB_SIDEBAR_PROVIDERS,
      ],
    };
  }
}
