import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncesService {

  ServerUrl = 'http://localhost:3002';


  constructor(
    private http: HttpClient
  ) {  }

  public getAnnounces() {
    return this.http.get(`${this.ServerUrl}/SubscriberBookAnnouncement/`);
  }


  create(criar: any){
    return this.http.post(`${this.ServerUrl}/SubscriberBookAnnouncement/`, criar).pipe( );
  }



}

