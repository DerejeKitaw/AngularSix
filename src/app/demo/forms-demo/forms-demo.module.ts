import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormComponent } from './form/form.component';
import { ExampleDef } from './example.model';
import { IntroComponent } from './intro/intro.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithCustomValidationComponent } from './demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './demo-form-with-events/demo-form-with-events.component';
// tslint:disable-next-line:max-line-length
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
// tslint:disable-next-line:max-line-length
import { DemoFormWithValidationsShorthandComponent } from './demo-form-with-validations-shorthand/demo-form-with-validations-shorthand.component';
import { Routes } from '@angular/router';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  { label: 'Intro', name: 'Root', path: '', component: IntroComponent },
  {
    label: 'Sku',
    name: 'DemoFormSku',
    path: 'sku',
    component: DemoFormSkuComponent
  },
  {
    label: 'Sku (with Builder)',
    name: 'DemoFormSkuWithBuilder',
    path: 'sku-builder',
    component: DemoFormSkuWithBuilderComponent
  },
  {
    label: 'Validation Explicit',
    name: 'DemoFormValidationsExplicit',
    path: 'validations-explicit',
    component: DemoFormWithValidationsExplicitComponent
  },
  {
    label: 'Validation Shorthand',
    name: 'DemoFormValidationsShorthand',
    path: 'validations-shorthand',
    component: DemoFormWithValidationsShorthandComponent
  },
  {
    label: 'Custom Validation',
    name: 'DemoFormWithCustomValidation',
    path: 'custom-validation',
    component: DemoFormWithCustomValidationComponent
  },
  {
    label: 'Events',
    name: 'DemoFormWithEvents',
    path: 'events',
    component: DemoFormWithEventsComponent
  },
  {
    label: 'NgModel',
    name: 'DemoFormNgModel',
    path: 'ng-model',
    component: DemoFormNgModelComponent
  }
];



@NgModule({
  imports: [CommonModule, FormsDemoRoutingModule],
  declarations: [
    SidebarComponent,
    FormComponent,
    IntroComponent,
    DemoFormNgModelComponent,
    DemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithCustomValidationComponent,
    DemoFormWithEventsComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithValidationsShorthandComponent,
    SidebarItemComponent
  ],
  exports: [FormComponent],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/forms' },
    // { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ]
})
export class FormsDemoModule {}
