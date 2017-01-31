import { Component } from '@angular/core';
import { PropertyInputComponent } from './property-input/property-input.component';

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
}
