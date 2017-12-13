import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';

import {
  LayoutPageComponent,
  LayoutHeaderComponent,
  LayoutColumnComponent,
  LayoutFooterComponent

} from './layout.component';

const LAYOUT_COMPONENTS = [
  LayoutPageComponent,
  LayoutHeaderComponent,
  LayoutColumnComponent,
  LayoutFooterComponent
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    LAYOUT_COMPONENTS,
  ],
  exports: [
    LAYOUT_COMPONENTS,
  ],
})
export class LayoutModule { }
