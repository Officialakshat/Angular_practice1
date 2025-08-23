import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserData } from '../user-data';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,          
  imports: [FormsModule,
     JsonPipe
    ] ,  
  templateUrl: './template-form.component.html',
  
})
export class TemplateFormComponent {
  userObj: UserData = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    console.log(this.userObj);
  }
}
