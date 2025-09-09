import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudServiceService } from '../service/crud-service.service';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  addUserForm : FormGroup 
  
  constructor(private router : Router, private fb: FormBuilder , private crud: CrudServiceService){
    
  this.addUserForm = this.fb.group({
   name : [''],
   username : [''],
   Email : ['']
  })
  }


  onCancel(){
  this.router.navigateByUrl('crud')
  }

   onSubmit(){
    console.log(this.addUserForm.value)
    this.crud.post(this.addUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud')
    })
   }
}
