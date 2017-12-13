import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NbActionComponent, NbActionsComponent } from './actions.component';

const NB_ACTIONS_COMPONENTS = [
  NbActionComponent,
  NbActionsComponent,
];

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ...NB_ACTIONS_COMPONENTS,
  ],
  exports: [
    ...NB_ACTIONS_COMPONENTS,
  ],
})
export class NbActionsModule { }
