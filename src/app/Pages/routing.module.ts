import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSubscriberFormComponent } from '../shared/createSubscriberForm/createSubscriberForm.component';

import { HomeComponent } from './home/home/home.component';
import { FormComponent } from 'src/app/shared/login/Form.component';


const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path:'',
    component: CreateSubscriberFormComponent
  },
  {
    path: '',
    component: HomeComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
