import { Component, OnInit } from '@angular/core';
import { BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertModal',
  templateUrl: './alertModal.component.html',
  styleUrls: ['./alertModal.component.scss']
})
export class AlertModalComponent implements OnInit {


  constructor( public bsModalRef: BsModalRef) { }

  ngOnInit() {

  }

}


