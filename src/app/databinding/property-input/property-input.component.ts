import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-input',
  template: `
    {{propertyInput}}
  `
})
export class PropertyInputComponent {
  //input let the property available from outside
  @Input() propertyInput: number = 79;
}
