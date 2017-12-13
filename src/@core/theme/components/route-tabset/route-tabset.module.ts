
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NbRouteTabsetComponent } from './route-tabset.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    NbRouteTabsetComponent,
  ],
  exports: [
    NbRouteTabsetComponent,
  ],
})
export class NbRouteTabsetModule { }
