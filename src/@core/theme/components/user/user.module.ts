import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import {
  NbUserComponent,
} from './user.component';

const USER_COMPONENTS = [
  NbUserComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...USER_COMPONENTS
  ],
  exports: [
    ...USER_COMPONENTS
  ]
})
export class NbUserModule { }
