import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SubscribersService {

  ServerUrl = 'http://localhost:3001';


  constructor(
    private http: HttpClient
  ) {  }

  public getSubscribers() {
    return this.http.get(`${this.ServerUrl}/Subscribers`);
  }

  create(criar: any){
    return this.http.post(`${this.ServerUrl}/Subscribers`, criar).pipe(

    );
  }

}


