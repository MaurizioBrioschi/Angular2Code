import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-event-binding',
  template: `
    <button (click)='onMauri()'>Click me</button>
  `,
  styles: []
})
export class CustomEventBindingComponent {
  /*
   * Output makes the EventEmitter available from outside, the argument in Output specifies the name available from outside
   * Don't do it if it is not really necessary... better to have the orinal nane available
   * The same works for @Input decorator
   */
  @Output('clickable') clicked = new EventEmitter<string>();

  onMauri = function(){
    this.clicked.emit('It works');
  }
}
