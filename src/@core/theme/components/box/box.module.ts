import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';

import {
  BoxComponent,
  BoxBodyComponent,
  BoxFooterComponent,
  BoxHeaderComponent,
} from './box.component';

const BOX_COMPONENTS = [
  BoxComponent,
  BoxBodyComponent,
  BoxFooterComponent,
  BoxHeaderComponent,
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    BOX_COMPONENTS,
  ],
  exports: [
    BOX_COMPONENTS,
  ],
})
export class BoxModule { }
