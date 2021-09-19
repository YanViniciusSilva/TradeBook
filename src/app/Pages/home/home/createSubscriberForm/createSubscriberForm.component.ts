import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { FormGroup } from '@angular/forms';

//import { apiService } from '../../../../service/api.service';
import { Subscriber } from 'rxjs';
import { SubscribersService } from '../../../../service/subscribers.service';


@Injectable ({
  providedIn: CreateSubscriberFormComponent,
})

@Component({
  selector: 'register',
  templateUrl: './createSubscriberForm.component.html',
  styleUrls: ['./createSubscriberForm.component.scss']
})
export class CreateSubscriberFormComponent implements OnInit {

  SubscriberForm!: FormGroup;
  Submitted = false;

  constructor(
    private SubscribersService : SubscribersService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.SubscribersService.getSubscribers().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
      )

    this.SubscriberForm = this.fb.group({
      FirstName: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      LastName: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      Birthday: [null, [ Validators.required]],
      SubscriberNumber: [null, [ Validators.required, Validators.minLength(11), Validators.maxLength(11), ]],
      SubscriberEmail: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.email ]],
      SubscriberPassword: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      //ConfSubscriberPassword: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberCep: [null, [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
      SubscriberStreet: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberStreetNumber: [null, [ Validators.required, Validators.minLength(1), Validators.maxLength(11) ]],
      SubscriberDistrict: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberCity: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      Complement: [null, [ Validators.minLength(3), Validators.maxLength(255) ]]
    });

    }

    hasError(field: string ){
      return this.SubscriberForm.get(field)?.errors;
    }

    onSubmit() {
      this.Submitted = true;
      console.log(this.SubscriberForm.value);
      if (this.SubscriberForm.valid){
        console.log( 'submit');
      }

    }



  }



