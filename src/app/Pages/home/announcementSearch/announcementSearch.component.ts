import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'announcementSearch',
  templateUrl: './announcementSearch.component.html',
  styleUrls: ['./announcementSearch.component.scss']
})
export class AnnouncementSearchComponent implements OnInit {

  constructor() { }

  trade = false;
  open = true;
  close = false;

  ngOnInit() {
  }

  TradeOn(){
    this.trade = true;
    this.open = false;
    this.close = true;
  }
  TradeOff(){
    this.trade = false;
    this.open = true;
    this.close = false;
  }

}
