import { Component } from '@angular/core';
import { StudentDataService } from '../service/student-data.service';

@Component({
  selector: 'app-student-data',
  imports: [],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {
// userData = {
//     name: "Akshat",
//     rollNO: 2326289,
//     branch: "B.tech CSE",
//     isPass: true,
//   }

dummyData : any;
isEligible : boolean;

constructor(private akshatData:StudentDataService){
this.dummyData = this.akshatData.userData

this.isEligible = this.akshatData.isEligibleForSubscription()
}
}
