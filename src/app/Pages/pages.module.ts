import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { FormComponent } from './Login/Form/Form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,

  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule

  ]
})
export class PagesModule { }
