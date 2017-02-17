import { Component, Input } from '@angular/core';
import { LogService } from '../../log.service';
@Component({
  selector: 'app-property-input',
  template: `
    {{propertyInput}}<br />Check the code to see how dependency injection works:
    <button (click)="onLog()">Check the log in console.log</button>
  `,
  providers: [LogService]
})
export class PropertyInputComponent {
  //input let the property available from outside
  @Input() propertyInput: number = 79;

  constructor(private logService: LogService){}

  onLog(){
    this.logService.write(this.propertyInput);
  }
}
