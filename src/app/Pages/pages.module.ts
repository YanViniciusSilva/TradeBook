import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateSubscriberFormComponent } from './home/home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './home/home/login/Form.component';
import { RoutingModule } from './routing.module';
//import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    CreateSubscriberFormComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule

  ]
})

export class PagesModule { }
