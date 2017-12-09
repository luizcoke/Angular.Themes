import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';

import {
  NbUserComponent,
} from './user.component';

const NB_USER_COMPONENTS = [
  NbUserComponent,
];

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [
    ...NB_USER_COMPONENTS,
  ],
  exports: [
    ...NB_USER_COMPONENTS,
  ],
})
export class NbUserModule { }
