import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  template: `
    <button (click)='onMauri()'>Click me</button>
  `,
  styles: []
})
export class CustomEventBindingComponent {
  //Output makes the EventEmitter available from outside, the argument in Output specifies the name available from outside
  @Output('clickable') clicked = new EventEmitter<string>();

  onMauri = function(){
    this.clicked.emit('It works');
  }
}
