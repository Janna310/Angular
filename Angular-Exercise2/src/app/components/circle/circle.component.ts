import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent implements OnInit {
  isCircle = true;
  constructor() {}
  newSize = {};
  diameter;

  ngOnInit(): void {
    this.diameter = 0;
  }

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
