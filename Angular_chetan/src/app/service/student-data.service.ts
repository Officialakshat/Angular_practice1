import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  userData = {
    name: "Akshat",
    rollNO: 2326289,
    branch: "B.tech CSE",
    isPass: true,
  }
  constructor() { }

}
