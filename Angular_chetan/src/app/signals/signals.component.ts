import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  count = signal(5)

  


  constructor(){
    effect(() => {
      console.log(this.count())
    }
  )}

  updateValue(){
    this.count.set(this.count()+1)
  }


}
