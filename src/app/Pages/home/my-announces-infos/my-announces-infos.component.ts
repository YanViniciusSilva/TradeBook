import { Component, OnInit } from '@angular/core';
import { AnnouncesService } from 'src/app/service/Announces.service';
import { SubscribersService } from 'src/app/service/subscribers.service';

@Component({
  selector: 'myAnnouncesInfos',
  templateUrl: './my-announces-infos.component.html',
  styleUrls: ['./my-announces-infos.component.scss']
})
export class MyAnnouncesInfosComponent implements OnInit {

  subscriber: any;
  AnnouncementInfo: any;

  constructor(
    private AnnouncesService: AnnouncesService,
    private SubscribersService: SubscribersService
  ){}

  ngOnInit(): void {

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
  }

}
