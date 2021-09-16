import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from '../shared/login/Form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSubscriberFormComponent } from '../shared/createSubscriberForm/createSubscriberForm.component';



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
