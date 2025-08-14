import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  imports: [CommonModule, ],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
 employees : any = [
  {
   empName : "Akshat",
   empNumber : 101,
   empEmail : "Akshat@gmail.com",
   empDept : "IT"
  },
    {
   empName : "Chetan",
   empNumber : 102,
   empEmail : "chetan@gmail.com",
   empDept : "QA"
  },
    {
   empName : "Amit",
   empNumber : 103,
   empEmail : "Amit@gmail.com",
   empDept : "IT"
  }
 ]

//  example - 2

companies : string[] = ["Google", "Amazon", "Techcadd", "CCreaftSolution"]
}
