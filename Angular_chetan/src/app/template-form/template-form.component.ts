import { Component } from '@angular/core';
import { UserData } from  '../user-data'

@Component({
  selector: 'app-template-form',
  imports: [],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
userObj : UserData = {}
}