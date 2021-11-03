import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SubscribersService } from 'src/app/service/subscribers.service';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from 'firebase/app';


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGsAcmRY1JshxaZdJFl-yLc2W8wHZTatw",
  authDomain: "tradebook-67339.firebaseapp.com",
  projectId: "tradebook-67339",
  storageBucket: "tradebook-67339.appspot.com",
  messagingSenderId: "69588856943",
  appId: "1:69588856943:web:566bf04957dedd833d5d9a",
  measurementId: "G-TKHNTJX911"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();


@Component({
  selector: 'Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.scss']
})



export class FormComponent implements OnInit {

  ServerUrl = 'http://localhost:3001/Subscribers';
  public login !: FormGroup;
  public loginData = this.login;
  email!: string;
  password!: string;
  popUpError = false;
  UserId!: object;



  constructor(
   //private SubscribersService : SubscribersService,
    private fb: FormBuilder,
      ) { }


  ngOnInit() {


    // this.SubscribersService.getSubscribers().subscribe(
    //   (Dados) => {
    //   console.log(Dados);
    //   },
    //   (error) => {
    //   console.log(error);
    // }
    // )

    this.login = this.fb.group({
      SubscriberEmail: [null,[Validators.required, Validators.email, Validators.maxLength(255)]],
      SubscriberPassword: [null,[Validators.required, Validators.maxLength(255)]]
    });
  }



  verify(){
    console.log("verify...")
    console.log(this.login.value);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      this.UserId = user;
      console.log(this.UserId);
      window.location.href = "http://localhost:4200/recommended";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.popUpError = true;
      this.login.reset();
    });

    }
  }


