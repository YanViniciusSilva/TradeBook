import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from 'src/app/Pages/home/login/Form.component';
import { CreateSubscriberFormComponent } from 'src/app/Pages/home/createSubscriberForm/createSubscriberForm.component';
import { HomeComponent } from './home/home.component';
import { RecommendedComponent } from './home/recommended/recommended.component';
import { UserProfileComponent } from './home/userProfile/userProfile.component';
import { FavoritesComponent } from './home/favorites/favorites.component';
import { AnnouncementSearchComponent } from './home/announcementSearch/announcementSearch.component';
import { MyAnnouncesComponent } from './home/myAnnounces/myAnnounces.component';
import { CreateAnnouncesComponent } from './home/createAnnounces/createAnnounces.component';
import { MyAnnouncesInfosComponent } from './home/my-announces-infos/my-announces-infos.component';



const routes: Routes = [
  {
    path: '',
    component: FormComponent
  },
  {
    path:'register',
    component: CreateSubscriberFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recommended',
    component: RecommendedComponent
  },
  {
    path: 'userProfile',
    component: UserProfileComponent,
  },
  {
    path: 'myAnnounces',
    component: MyAnnouncesComponent
  },
  {
    path: 'myAnnouncesInfos',
    component: MyAnnouncesInfosComponent
  },
  {
    path: 'createAnnounces',
    component: CreateAnnouncesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: 'announcementSearch',
    component: AnnouncementSearchComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule{}
