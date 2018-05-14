import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsDemoRoutingModule
  ],
  declarations: [SidebarComponent, FormComponent]
})
export class FormsDemoModule { }
