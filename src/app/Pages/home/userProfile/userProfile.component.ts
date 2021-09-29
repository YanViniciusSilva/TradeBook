import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { SubscribersService } from '../../../service/subscribers.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';






@Component({
  selector: 'userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})



export class UserProfileComponent implements OnInit {

  private ServerUrl:  string ='http://localhost:3001';
  subscribers: any;



  constructor(
    private activatedRoute: ActivatedRoute,
    private SubscribersService: SubscribersService,
    private http: HttpClient) { }



  ngOnInit() {

    // this.listSubscribeInfo();

     this.SubscribersService.getSubscribers().subscribe(
       (res) => {
         console.log(res);
         console.log(this.subscribers);

       },
       (error) => {
         console.log(error);
       }
     );
  }

  // listSubscribeInfo(){
  //   const id = this.activatedRoute.snapshot.params['id'];

  //   const userName = this.SubscribersService.getSubscribers(`${this.ServerUrl}/Subscribers/${id}`)

  //   return forkJoin([userName]).subscribe(
  //     res => {
  //       this.subscribers = res
  //     }    );

  // }



}


