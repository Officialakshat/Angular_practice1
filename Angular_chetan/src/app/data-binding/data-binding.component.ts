import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'

})
export class DataBindingComponent {
  // interpolation
  myName : string = "Akshat"
  

  // property binding
  myImage = "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15557590/2022/2/18/a88d594a-0184-4042-baad-01c2d7874cec1645166286136-Roadster-Men-Shirts-4091645166285596-1.jpg"
  onSave(){
    alert("Data Saved successfully")
  }
  onChange(){
    alert("Country Selected")


  }
 
  // practice questions 
 isDisabled : boolean = false;

 count : number = 0;

 
}
