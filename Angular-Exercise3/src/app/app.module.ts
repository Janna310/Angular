import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpDownCounter1Component } from './components/up-down-counter1/up-down-counter1.component';

@NgModule({
  declarations: [
    AppComponent,
    UpDownCounter1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
