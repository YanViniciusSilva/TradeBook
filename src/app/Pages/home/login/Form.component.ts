import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';

import { SubscribersService } from 'src/app/service/subscribers.service';


@Component({
  selector: 'Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.scss']
})
export class FormComponent implements OnInit {

  ServerUrl = 'http://localhost:3001/Subscribers';
  submitted = false;
  public login !: FormGroup;
  public loginData = this.login;


  constructor(
    private SubscribersService : SubscribersService,
    private fb: FormBuilder,
    ) { }

  ngOnInit() {

    this.SubscribersService.getSubscribers().subscribe(
      (Dados) => {
      console.log(Dados);
      },
      (error) => {
      console.log(error);
    }
    )

    this.login = this.fb.group({
      SubscriberEmail: [null,[Validators.required, Validators.email, Validators.maxLength(255)]],
      SubscriberPassword: [null,[Validators.required, Validators.maxLength(255)]]
    });
  }

  verify(){
    console.log("verify...")
    console.log(this.login.value);
    if (this.login.value == this.SubscribersService.getSubscribers){
    this.submitted = true;
    console.log('success');
    console.log(this.loginData);
    }else{
    console.log("deu ruim");
    this.submitted = false;
    }
  }

}
