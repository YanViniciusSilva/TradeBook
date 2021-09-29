import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

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
