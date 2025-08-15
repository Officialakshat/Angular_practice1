import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [NgClass],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
   parentDiv : string = "bg-green-500"
   Child1 : string = "bg-red-500";
   Child2 : string = "bg-red-500";

   changeToGreen(){
    this.Child1  = "bg-blue-500";
    this.Child2 = "bg-blue-500";
   }
   changeToYellow(){
    this.Child1 = "bg-yellow-500"
    this.Child2 = "bg-yellow-500";
   }

  //  second example

  div1: string = "bg-orange-500"
   div2: string = "bg-pink-500"

   changeColorDiv(color : string){
    this.div1 = color
    this.div2 = color
   }

  }