import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { FormsDemoModule } from './forms-demo/forms-demo.module';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsDemoModule
  ],
  declarations: []
})
export class DemoModule { }
