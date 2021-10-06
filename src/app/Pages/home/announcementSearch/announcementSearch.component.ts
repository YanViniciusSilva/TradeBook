import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookAnnouncesService } from '../../../service/BookAnnounces.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';



@Component({
  selector: 'announcementSearch',
  templateUrl: './announcementSearch.component.html',
  styleUrls: ['./announcementSearch.component.scss']
})
export class AnnouncementSearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();


  constructor(
    private BookAnnouncesService: BookAnnouncesService,
    private http: HttpClient
  ) { }

  trade = false;
  open = true;
  close = false;
  setAllBooks: any;
  getAllBooksInfos: any;
  getAllBooks?: any;


  ngOnInit(): void{

    this.BookAnnouncesService.getBookAnnounces().subscribe(
      res => {
      this.setAllBooks = res;
      this.getAllBooksInfos = res;
      this.getAllBooks = this.setAllBooks;
      console.log(this.getAllBooks);
      }
    );

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

   public search(value: string){
    this.emmitSearch.emit(value);
  }

  public getsearch(value: string){
    console.log(value);
    //filter é uma função própria do javaScript
    const filter = this.BookAnnouncesService.apiListAllBooks.subscribe((res: any) => {

      /*o return abaixo faz uma verificação, ele verifica se o nome que foi escrito corresponde a algum
      nome da lista de pokemons, o toLowerCase vai fazer com que o valor escrito mesmo que seja com letras
      maiúsculas seja convertido para letras minúsculas, já que os nomes da api estão todos minúsculos*/
      return !res.BookTitle.indexOf(value.toLowerCase());
    });

    this.getAllBooks = filter;
  }


}
