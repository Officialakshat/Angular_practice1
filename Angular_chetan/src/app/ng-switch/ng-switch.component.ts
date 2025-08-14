import { CommonModule, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  imports: [NgSwitch, CommonModule],
  templateUrl: './ng-switch.component.html',
  styleUrl: './ng-switch.component.css'
})
export class NgSwitchComponent {
   grade : number = 0;

   set(x : number){
     this.grade = x;
   }
}
