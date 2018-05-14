import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
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

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'sku', component: DemoFormSkuComponent, pathMatch: 'full' },
  {
    path: 'sku-builder',
    component: DemoFormSkuWithBuilderComponent,
    pathMatch: 'full'
  },
  {
    path: 'validations-explicit',
    component: DemoFormWithValidationsExplicitComponent,
    pathMatch: 'full'
  },
  {
    path: 'validations-shorthand',
    component: DemoFormWithValidationsShorthandComponent,
    pathMatch: 'full'
  },
  {
    path: 'custom-validation',
    component: DemoFormWithCustomValidationComponent,
    pathMatch: 'full'
  },
  { path: 'events', component: DemoFormWithEventsComponent, pathMatch: 'full' },
  { path: 'ng-model', component: DemoFormNgModelComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsDemoRoutingModule { }
