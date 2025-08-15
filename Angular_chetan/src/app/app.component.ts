import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    // AttributeDirectivesComponent
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_chetan';
}


