import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './Pages/home/home/login/Form.component';
import { CreateSubscriberFormComponent } from './Pages/home/home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from './Pages/home/home/home.component';

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
