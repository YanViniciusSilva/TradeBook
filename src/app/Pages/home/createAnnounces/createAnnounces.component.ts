import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouncesService } from '../../../service/Announces.service';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'createAnnounces',
  templateUrl: './createAnnounces.component.html',
  styleUrls: ['./createAnnounces.component.scss']
})

@Injectable ({
  providedIn: CreateAnnouncesComponent,
})
export class CreateAnnouncesComponent implements OnInit {

  announceForm!: FormGroup;
  errorSubmit = false;
  Submitted = false;
  images!: Array<string>;
  BookImage!: string;
  BookImage2!: string;
  BookImage3!: string;
  BookImage4!: string;
  BookImage5!: string;
  BookDescription!: string;
  BookGenre!: string;
  AnnouncementDescription!: string;
  BookTradeTitle!: string;
  OfferBookConditions!: string;
  UrgencyLevel!: string;
  BookTitle!: string;


  constructor(
    private AnnouncesService: AnnouncesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {





    this.announceForm = this.fb.group({
      BookImage: [null, [ Validators.required]],
      BookImage2: [null, []],
      BookImage3: [null, []],
      BookImage4: [null, []],
      BookImage5: [null, []],
      BookTitle: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      BookTradeTitle: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      BookGenre: [null, [ Validators.required,  Validators.minLength(3), Validators.maxLength(255)]],
      AnnouncementDescription: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255), ]],
      BookDescription: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      OfferBookConditions: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255), ]],
      UrgencyLevel: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255)]]



    });

  }

  photoPreview!: Blob;
  photoPreview2!: Blob;
  photoPreview3!: Blob;
  photoPreview4!: Blob;
  photoPreview5!: Blob;

  imageUrl!: string;
  imageUrl2!: string;
  imageUrl3!: string;
  imageUrl4!: string;
  imageUrl5!: string;

  srcSelected = false;
  srcSelected2 = false;
  srcSelected3 = false;
  srcSelected4 = false;
  srcSelected5 = false;


  onImageSelected(event:any) {

    this.photoPreview = event.target.files[0];
    let reader = new FileReader();
    this.srcSelected = true;

    reader.onload = (e: any) => {
      this.imageUrl = e.target.result;
    };
    reader.readAsDataURL(this.photoPreview);
  }

  onImage2Selected(event:any) {

    this.photoPreview2 = event.target.files[0];
    let reader = new FileReader();
    this.srcSelected2 = true;


    reader.onload = (e: any) => {
      this.imageUrl2 = e.target.result;
    };
    reader.readAsDataURL(this.photoPreview2);
  }
  onImage3Selected(event:any) {

    this.photoPreview3 = event.target.files[0];
    let reader = new FileReader();
    this.srcSelected3 = true;


    reader.onload = (e: any) => {
      this.imageUrl3 = e.target.result;
    };
    reader.readAsDataURL(this.photoPreview3);
  }
  onImage4Selected(event:any) {

    this.photoPreview4 = event.target.files[0];
    let reader = new FileReader();
    this.srcSelected4 = true;


    reader.onload = (e: any) => {
      this.imageUrl4 = e.target.result;
    };
    reader.readAsDataURL(this.photoPreview4);
  }
  onImage5Selected(event:any) {

    this.photoPreview5 = event.target.files[0];
    let reader = new FileReader();
    this.srcSelected5 = true;


    reader.onload = (e: any) => {
      this.imageUrl5 = e.target.result;
    };
    reader.readAsDataURL(this.photoPreview5);
  }





  async onSubmit(){

    if (this.BookImage2 == null || this.BookImage3 == null || this.BookImage4 == null || this.BookImage5 == null ){
      if(this.BookImage2 == undefined){
        this.BookImage2 = 'Sem imagem';
      }
      if(this.BookImage3 == undefined){
        this.BookImage3 = 'Sem imagem';
      }
      if(this.BookImage4 == undefined){
        this.BookImage4 = 'Sem imagem';
      }
      if(this.BookImage5 == undefined){
        this.BookImage5 = 'Sem imagem';
      }

    }

    this.images = [this.BookImage, this.BookImage2, this.BookImage3, this.BookImage4, this.BookImage5];
    console.log(this.images);
    if(this.announceForm.valid){
      this.errorSubmit = false;
      this.Submitted = true;
      window.location.href="http://localhost:4200/myAnnounces";
      const db = getFirestore();

      try {
        const docRef = await addDoc(collection(db, "Announces"), {
          BookImage: this.images,
          BookTitle: this.BookTitle,
          BookTradeTitle: this.BookTradeTitle,
          BookGenre: this.BookGenre,
          AnnouncementDescription: this.AnnouncementDescription,
          BookDescription: this.BookDescription,
          OfferBookConditions: this.OfferBookConditions,
          UrgencyLevel: this.UrgencyLevel
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      // this.AnnouncesService.create(this.announceForm.value).subscribe(
      //   error => console.log(error),
      //   success => console.log('success'),
      // );

  }else{
    console.log("error");
    this.errorSubmit = true;
    this.Submitted = false;
  }

}}
