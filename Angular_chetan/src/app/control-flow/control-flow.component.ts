import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-control-flow',
  imports: [NgIf, FormsModule, SharedDataService ],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  // First Example
  isChecked : boolean = false;
  onClick(){
    this.isChecked = ! this.isChecked;
  }

  // Second Example

  isDivShow : boolean = false;

  onShow(){
    this.isDivShow = true;
  }

   onHide(){
    this.isDivShow = false;
  }


  constructor(){
  }

  // thrid Example

  firstInput  = '';
  secondInput  = '';


  // fourth Example

  input1 = "";
  input2 = "";
 
  
}


