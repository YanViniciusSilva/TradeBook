import { Component, OnInit } from '@angular/core';

//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.scss']
})
export class FormComponent implements OnInit {



  //public login: FormGroup | undefined;

  constructor() { }

  ngOnInit() {
    // this.login = new FormGroup({
    //   Email: new FormControl(null),
    //   Password: new FormControl(null)
    // })
  }

}
