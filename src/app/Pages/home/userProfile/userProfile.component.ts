import { Component, OnInit } from '@angular/core';
import { SubscribersService } from '../../../service/subscribers.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { collection, documentId, FieldPath, getDocs, getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';










@Component({
  selector: 'userProfile',
  templateUrl: './userProfile.component.html',
  styleUrls: ['./userProfile.component.scss']
})



export class UserProfileComponent implements OnInit {
  [x: string]: any;

  private ServerUrl:  string ='http://localhost:3001';
  subscribers: any;
  auth2!: string;
  UserId!: string;
  DocInfos!: string;
  UserImg!: string;
  Sannitize!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private SubscribersService: SubscribersService,
    private http: HttpClient) { }



  async ngOnInit() {
    const db = getFirestore();
    const auth = getAuth();
    console.log(auth);
    const querySnapshot = await getDocs(collection(db, "Users"));

    // _document.data.value.mapValue.fields.UserEmail.stringValue


    querySnapshot.forEach((docs) => {
      // const docz:any = docs;
      // this.DocInfos =`${docz._document.data.value.mapValue.fields.UserEmail.stringValue}`;
      // console.log(`valor de docz: ${docz}`);
      // console.log(`valor de docInfos: ${this.DocInfos}`);
      // if( this.DocInfos == this.UserId){
      console.log(`${docs.id} => ${docs.data()}`);
      console.log(docs);
      // }else{
      //   console.log('deu ruim');
      // }
    })

    const getDocument = getAuth();
    this.UserId =`${getDocument.currentUser!.providerData[0].email}`;
    console.log(`veio isso aqui ó: ${this.UserId}`);

    const docRef = doc(db, "Users", `CTuXCF07Pgp8HCMD9DWF`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      this.auth2 = `${docSnap.data().FirstName} ${docSnap.data().LastName}`;
      this.UserImg = `${docSnap.data().UserProfilePhoto._path.segments[6]}/${docSnap.data().UserProfilePhoto._path.segments[7]}/${docSnap.data().UserProfilePhoto._path.segments[8]}/${docSnap.data().UserProfilePhoto._path.segments[9]}/${docSnap.data().UserProfilePhoto._path.segments[10]}`;
      console.log(`veio isso aqui ó: ${this.UserImg}`);

      console.log(this.auth2);
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }





    // this.listSubscribeInfo();

    //  this.SubscribersService.getSubscribers().subscribe(
    //    (res) => {
    //      console.log(res);
    //      console.log(this.subscribers);

    //    },
    //    (error) => {
    //      console.log(error);
    //    }
    //  );


  // listSubscribeInfo(){
  //   const id = this.activatedRoute.snapshot.params['id'];

  //   const userName = this.SubscribersService.getSubscribers(`${this.ServerUrl}/Subscribers/${id}`)

  //   return forkJoin([userName]).subscribe(
  //     res => {
  //       this.subscribers = res
  //     }    );

  // }



    }






  }
