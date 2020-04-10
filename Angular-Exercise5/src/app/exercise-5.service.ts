import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Exercise5Service {
  name: string;

  getName(): any {
    return this.name;
  }

  setName(formName): void {
    this.name = formName;
  }
}
