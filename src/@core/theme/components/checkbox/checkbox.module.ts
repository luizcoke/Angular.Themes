import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NbCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [NbCheckboxComponent],
  exports: [NbCheckboxComponent],
})
export class NbCheckboxModule { }
