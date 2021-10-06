import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookAnnouncesService {

  private ServerUrl: string = 'http://localhost:3003';


  constructor(
    private http: HttpClient
  ) {  }

  public getBookAnnounces() {
    return this.http.get(`${this.ServerUrl}/BooksAnnouncements/`);
  }

  get apiListAllBooks():Observable<any>{
    return this.http.get<any>(this.ServerUrl).pipe(
      tap(res => res),
      tap( res => {
        res.results.map((resBook: any) =>{

          this.getBookAnnounces().subscribe(
            res => resBook.status = res
          )


        });
      }))
    }}
