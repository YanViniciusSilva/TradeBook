import { Component, OnInit } from '@angular/core';
import { AnnouncesService } from '../../../service/Announces.service';
import { any } from 'sequelize/types/lib/operators';
import { SubscribersService } from 'src/app/service/subscribers.service';

@Component({
  selector: 'myAnnounces',
  templateUrl: './myAnnounces.component.html',
  styleUrls: ['./myAnnounces.component.scss']
})
export class MyAnnouncesComponent implements OnInit {

  AnnouncementInfo: any;
  subscriber: any;
  noAnounces = true;
  announceOn = false;

  constructor(
    private AnnouncesService: AnnouncesService,
    private SubscribersService: SubscribersService
    ) { }

  ngOnInit() {

    this.SubscribersService.getSubscribers().subscribe(
      (res) => {
        this.subscriber = res;
        console.log(this.subscriber);
        console.log(res);

      },
      (error) => {
        console.log(error);
      }
    );

    this.AnnouncesService.getAnnounces().subscribe(
      (res) => {
        this.AnnouncementInfo = res;
        console.log(res);

      },
      (error) => {
        console.log(error);
      }
    );

    if(this.AnnouncesService.getAnnounces() != null){
      this.noAnounces = false;
      this.announceOn = true;
    }


  }



}
