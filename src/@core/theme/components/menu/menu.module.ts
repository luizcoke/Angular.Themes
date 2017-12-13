import { NgModule, ModuleWithProviders } from '@angular/core';

import { NbSharedModule } from '../shared/shared.module';
import { MenuComponent, MenuItemComponent } from './menu.component';
import { MenuService, MenuInternalService } from './menu.service';

const MENU_COMPONENTS = [MenuComponent, MenuItemComponent];
const MENU_PROVIDERS = [MenuService, MenuInternalService];

@NgModule({
  imports: [NbSharedModule],
  declarations: [...MENU_COMPONENTS],
  exports: [...MENU_COMPONENTS],
})
export class MenuModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: MenuModule,
      providers: [
        ...MENU_PROVIDERS,
      ],
    };
  }
}
