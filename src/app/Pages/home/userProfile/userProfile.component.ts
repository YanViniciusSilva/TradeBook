import { Component, OnInit } from '@angular/core';
import { any } from 'sequelize/types/lib/operators';
import { SubscribersService } from '../../../service/subscribers.service';

@Component({
  selector: 'userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})
export class UserProfileComponent implements OnInit {

  ServerUrl =  'http://localhost:3001';


  constructor( private SubscribersService: SubscribersService) { }

  ngOnInit() {


    this.SubscribersService.getSubscribers().subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.log(error);
      }
    );



  }


}


