import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
   reactiveForm : FormGroup;

   constructor(){
    this.reactiveForm = new FormGroup({
      firstName : new FormControl(""),
      lastName : new FormControl(""),
      email : new FormControl(""),
      password : new FormControl(""),
      isChecked : new FormControl(),
      address : new FormGroup({
        city : new FormControl(""),
        Street : new FormControl(""),
        pincode : new FormControl(),
      })
    })
   }

   onSubmit(){
    console.log(this.reactiveForm.value);
    
   }
}
