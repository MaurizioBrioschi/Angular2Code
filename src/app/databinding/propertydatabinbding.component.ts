import { Component } from '@angular/core';
import { PropertyInputComponent } from './property-input/property-input.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CustomEventBindingComponent } from './eventbinding/custom-event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-propertydatabinbding',
  templateUrl: './propertydatabinbding.component.html',
  styleUrls: ['./propertydatabinbding.component.css']
})
export class PropertydatabinbdingComponent {
  fixedtext = "this is a fixed text from class PropertydatabinbdingComponent "

  onTest = function(){
    return true;
  }

  onTest2 = function(){
    return 'green';
  }

  onClicked(value: string) {
    alert(value);
  }
}
