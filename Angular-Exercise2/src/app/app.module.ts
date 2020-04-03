import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, SliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
