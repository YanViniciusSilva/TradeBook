import { Component, OnInit, Injectable} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnnouncesService } from '../../../service/Announces.service';

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
  constructor(
    private AnnouncesService: AnnouncesService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {


    this.announceForm = this.fb.group({
      BookTitle: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      BookTradeTitle: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255) ]],
      BookGenre: [null, [ Validators.required,  Validators.minLength(3), Validators.maxLength(255)]],
      AnnouncementDescription: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255), ]],
      BookDescription: [null, [ Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    });

  }



  onSubmit(){
    if(this.announceForm.valid){
      this.errorSubmit = false;
      this.Submitted = true;
      window.location.href="http://localhost:4200/myAnnounces";
      this.AnnouncesService.create(this.announceForm.value).subscribe(
        error => console.log(error),
        success => console.log('success'),
      );

  }else{
    console.log("error");
    this.errorSubmit = true;
    this.Submitted = false;
  }

}}
