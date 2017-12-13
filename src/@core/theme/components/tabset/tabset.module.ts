
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NbTabsetComponent, NbTabComponent } from './tabset.component';

const TABSET_COMPONENTS = [
  NbTabsetComponent,
  NbTabComponent
];

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ...TABSET_COMPONENTS
  ],
  exports: [
    ...TABSET_COMPONENTS
  ]
})
export class NbTabsetModule { }
