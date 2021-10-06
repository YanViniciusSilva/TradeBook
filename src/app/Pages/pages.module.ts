import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateSubscriberFormComponent } from './home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './home/login/Form.component';
import { RoutingModule } from './routing.module';
import { AnnouncementSearchComponent } from './home/announcementSearch/announcementSearch.component';
import { FavoritesComponent } from './home/favorites/favorites.component';
import { RecommendedComponent } from './home/recommended/recommended.component';
import { UserProfileComponent } from './home/userProfile/userProfile.component';
import { NavigationMenuComponent } from '../shared/navigationMenu/navigationMenu.component';
import { MyAnnouncesComponent } from './home/myAnnounces/myAnnounces.component';
import { CreateAnnouncesComponent } from './home/createAnnounces/createAnnounces.component';






@NgModule({
  declarations: [
    HomeComponent,
    FormComponent,
    CreateSubscriberFormComponent,
    AnnouncementSearchComponent,
    FavoritesComponent,
    RecommendedComponent,
    UserProfileComponent,
    NavigationMenuComponent,
    MyAnnouncesComponent,
    CreateAnnouncesComponent


  ],
  imports: [
    CommonModule,
    RoutingModule,
    ReactiveFormsModule

  ]
})

export class PagesModule { }
