import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [NgIf, FormsModule],
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
inputField: boolean = true;

toShow(){
  this.inputField = true;
}

toHide(){
  this.inputField = false;
}


// example 3

input1: string = '';
input2: string = '';

}
