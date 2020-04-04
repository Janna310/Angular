import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpDownCounter1Component } from './components/up-down-counter1/up-down-counter1.component';
import { UpDownCounter2Component } from './components/up-down-counter2/up-down-counter2.component';
import { UpDownCounter3Component } from './components/up-down-counter3/up-down-counter3.component';

@NgModule({
  declarations: [
    AppComponent,
    UpDownCounter1Component,
    UpDownCounter2Component,
    UpDownCounter3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
