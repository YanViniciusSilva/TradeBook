import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from 'src/app/Pages/home/home/login/Form.component';
import { CreateSubscriberFormComponent } from './home/home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from './home/home/home.component';



const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path:'register',
    component: CreateSubscriberFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
