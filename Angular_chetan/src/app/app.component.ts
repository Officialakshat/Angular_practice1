import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';
import { BuildInPipesComponent } from './build-in-pipes/build-in-pipes.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
// import { RouterLink } from "../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    // ControlFlowComponent
    RouterOutlet
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_chetan';
}


