import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { SubscribersService } from 'src/app/service/subscribers.service';





@Injectable ({
  providedIn: CreateSubscriberFormComponent,
})

@Component({
  selector: 'register',
  templateUrl: './createSubscriberForm.component.html',
  styleUrls: ['./createSubscriberForm.component.scss']
})
export class CreateSubscriberFormComponent implements OnInit {

  public SubscriberForm!: FormGroup;
  Submitted = false;
  errorSubmit = false;
  public FormData = this.SubscriberForm;
  email !: string;
  password!: string;
  FirstName!: string;
  LastName!: string;
  Birthday!: Date;
  UserPhone!: number;
  UserCep!: number;
  UserStreet!: string;
  UserStreetNumber!: number;
  UserDistrict!: string;
  UserCity!: string;
  UserState!: string;
  Complement!: string;
  photoPreview!: Blob;
  UserProfilePhoto!:File;


  imageUrl !: string;
  constructor(
    private SubscribersService : SubscribersService,
    private fb: FormBuilder,
  ) { }



  ngOnInit() {

    // this.SubscribersService.getSubscribers().subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   )





    this.SubscriberForm = this.fb.group({
      FirstName: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      LastName: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      Birthday: [null, [ Validators.required]],
      SubscriberNumber: [null, [ Validators.required, Validators.minLength(10), Validators.maxLength(11), ]],
      SubscriberEmail: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255), Validators.email ]],
      SubscriberPassword: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberCep: [null, [ Validators.required, Validators.minLength(8), Validators.maxLength(8) ]],
      SubscriberStreet: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberStreetNumber: [null, [ Validators.required, Validators.minLength(1), Validators.maxLength(11) ]],
      SubscriberDistrict: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      SubscriberCity: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      UserState: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      Complement: [null, [ Validators.minLength(3), Validators.maxLength(255) ]],
      UserProfilePhoto: [null, [ Validators.minLength(3), Validators.maxLength(255) ]]
    });

    }

    hasError(field: string ){
      return this.SubscriberForm.get(field)?.errors;
    }

    async onSubmit(){
      const auth = getAuth();
      const db = getFirestore();
      try {
            const docRef = await addDoc(collection(db, "Users"), {
              email: this.email,
              password : this.password,
              FirstName: this.FirstName,
              LastName: this.LastName,
              Birthday: this.Birthday,
              UserPhone: this.UserPhone,
              UserCep: this.UserCep,
              UserStreet: this.UserStreet,
              UserStreetNumber: this.UserStreetNumber,
              UserDistrict: this.UserDistrict,
              UserCity: this.UserCity,
              UserState: this.UserState,
              Complement: this.Complement,
              UserProfilePhoto: this.UserProfilePhoto
            });

            console.log("Document written with ID: ", docRef.id);
      } catch (e) {
            console.error("Error adding document: ", e);
      }

          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (userCredential) => {
              // Signed in
              const user = userCredential.user;
              this.errorSubmit = false;
              this.Submitted = true;
              console.log(this.SubscriberForm.value);
              if(this.SubscriberForm.valid){
                this.errorSubmit = false;
                this.Submitted = true;

                // this.SubscribersService.create(this.SubscriberForm.value).subscribe(
                // error => console.log(error),
                // success => console.log('success'),
                // );



                // ...
              // }})
              }})
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                this.Submitted = false;
                this.errorSubmit = true;
                // ..
              });

    }

    fileSelected(){
      console.log(this);
    }



    onImageSelected(event:any) {

      this.photoPreview = event.target.files[0];
      let reader = new FileReader();

      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.photoPreview);
    }
  }









