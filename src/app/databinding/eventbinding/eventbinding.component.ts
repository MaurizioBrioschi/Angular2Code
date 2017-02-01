import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <button (click)="onCiao()">Click me!</button>
  `
})
export class EventbindingComponent  {
  onCiao(){
    alert('ciao');
  }
}
