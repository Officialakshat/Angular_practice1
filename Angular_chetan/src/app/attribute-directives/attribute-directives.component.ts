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
   Child1 : string = "bg-red-500"
   Child2 : string = "bg-red-500"
}
