import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../app/Pages/home/login/Form.component';
import { CreateSubscriberFormComponent } from '../app/Pages/home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from '../app/Pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./Pages/pages.module').then(p => p.PagesModule)
  },
  {
    path: '',
    component: FormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },

  {
    path:'register',
    component: CreateSubscriberFormComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
