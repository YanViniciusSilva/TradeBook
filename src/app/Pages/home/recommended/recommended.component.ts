import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss']
})
export class RecommendedComponent implements OnInit {

  favoriteOn = false;
  favoriteOff = true;
  constructor() { }

  ngOnInit() {
  }

  favorite(){
    this.favoriteOff = false;
    this.favoriteOn = true;
  }

  noFavorite(){
    this.favoriteOff = true;
    this.favoriteOn = false;
  }


}
