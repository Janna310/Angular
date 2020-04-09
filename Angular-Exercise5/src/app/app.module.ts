import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercise5FormComponent } from './exercise5-form/exercise5-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, Exercise5FormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
