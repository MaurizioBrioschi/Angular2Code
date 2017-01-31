import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PropertydatabinbdingComponent } from './propertydatabinbding/propertydatabinbding.component';
import { PropertyInputComponent } from './propertydatabinbding/property-input/property-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertydatabinbdingComponent,
    PropertyInputComponent
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
