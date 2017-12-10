import { NgModule } from '@angular/core';
import { NbSharedModule } from '../shared/shared.module';
import { NbCheckboxComponent } from './checkbox.component';

@NgModule({
  imports: [
    NbSharedModule,
  ],
  declarations: [NbCheckboxComponent],
  exports: [NbCheckboxComponent],
})
export class NbCheckboxModule { }
