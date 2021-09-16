import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './shared/login/Form.component';
import { CreateSubscriberFormComponent } from './shared/createSubscriberForm/createSubscriberForm.component';

const routes: Routes = [
{
  path:'',
  loadChildren: () => import('./Pages/pages.module').then(p => p.PagesModule)
},
{
  path: 'LoginForm',
  component: FormComponent
},
{
  path:'crateSubscriberForm',
  component: CreateSubscriberFormComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
