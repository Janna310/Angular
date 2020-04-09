import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Exercise5Service {
  name: string;

  getName() {
    return this.name;
  }

  setName(formName) {
    this.name = formName;
  }
}
