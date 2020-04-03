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
    this.newSize = {
      ['width']: `${newDiameter.value}px`,
      ['height']: `${newDiameter.value}px`,
    };

    return this.newSize;
  }

  toggleEvent() {
    this.isCircle = !this.isCircle;
  }
}
