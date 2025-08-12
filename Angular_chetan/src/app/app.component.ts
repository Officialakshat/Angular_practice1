import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DirectivesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_chetan';
}
