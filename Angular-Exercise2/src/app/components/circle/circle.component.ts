import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent implements OnInit {
  diameter = 1;
  isCircle = true;
  constructor() {}
  newSize = {};

  ngOnInit(): void {}

  changeDiameter(newDiameter) {
    console.log(newDiameter);

    this.newSize = {
      ['width']: `${newDiameter}px`,
      ['height']: `${newDiameter}px`,
    };
    console.log(this.newSize);

    return this.newSize;
  }

  toggleEvent() {
    this.isCircle = !this.isCircle;
  }
}
