import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy, 
  Input 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  template: `
    <div class="p-4 border rounded">
      <h2>Lifecycle Demo Component</h2>
      <p>Current Value: {{ data }}</p>
      <button (click)="changeData()">Change Data</button>
    </div>
  `
})
export class LifecycleDemoComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() data: string = "Initial Value";

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges() {
    console.log('ngOnChanges called - when @Input property changes');
  }

  ngOnInit() {
    console.log('ngOnInit called - component initialized');
  }

  ngDoCheck() {
    console.log('ngDoCheck called - custom change detection');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called - content projected');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called - content checked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called - component view initialized');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called - component view checked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called - component destroyed');
  }

  changeData() {
    this.data = "Updated Value " + Math.floor(Math.random() * 100);
  }
}
