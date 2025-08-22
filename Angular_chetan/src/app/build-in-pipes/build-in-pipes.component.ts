import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-build-in-pipes',
  imports: [CommonModule],
  templateUrl: './build-in-pipes.component.html',
  styleUrl: './build-in-pipes.component.css'
})
export class BuildInPipesComponent {
// simple string example
  title : string = "Build in Pipes in Angular - 19";

  // date example
  date: any = Date();

  // json pipe example

  details : any = {
    name : "Akshat",
    age : 22,
    isMarried : false

  
  }

    // decimal pipe example
    num : number = 3.0
 
    // percent pipe example
    marks : number = 0.75

    // currency pipe example
   balance : number = 82.23

   
  
}
