import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
// structural Directives
// example 1
isRemove = false;

toChange(){
  this.isRemove = !this.isRemove;
}

// example 2
isHide = false;


toHide(){
  this.isHide === true;
}




}
