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

  ngOnInit(): void {}

  changeDiameter(event) {
    this.diameter = event.value;
  }

  theSize = {
    ['width']: this.diameter + 'px',
    ['height']: this.diameter + 'px',
  };

  // ['border-bottom']: '3px solid lightgreen';
  toggleEvent() {
    this.isCircle = !this.isCircle;
  }
}
