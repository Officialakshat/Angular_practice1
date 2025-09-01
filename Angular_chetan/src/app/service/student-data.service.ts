import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  userData = {
    name: "Akshat",
    rollNO: 2326289,
    email: "officialakshat044@gmail.com",
    branch: "B.tech CSE",
    isPass: true,
    Subscription : 'basic'
  }
  constructor() { }

  isEligibleForSubscription(){
    if(this.userData.Subscription == "basic" && this.userData.email.endsWith('@gmail.com') ){
        return true
    }else{
      return false
    }
  }
}
