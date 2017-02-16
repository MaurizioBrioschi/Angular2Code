import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertydatabinbdingComponent } from './databinding/propertydatabinbding.component';
import { PropertyInputComponent } from './databinding/property-input/property-input.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { CustomEventBindingComponent } from './databinding/eventbinding/custom-event-binding.component';
import { TwoWayBindingComponent } from './databinding/two-way-binding/two-way-binding.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { HeaderComponent } from './header.component';
import { CustomDirectiveHighlightDirective } from './custom-directive-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    PropertydatabinbdingComponent,
    PropertyInputComponent,
    EventbindingComponent,
    CustomEventBindingComponent,
    TwoWayBindingComponent,
    LifeCycleComponent,
    HeaderComponent,
    CustomDirectiveHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
