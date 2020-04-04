import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter1',
  templateUrl: './up-down-counter1.component.html',
  styleUrls: ['./up-down-counter1.component.css'],
})
export class UpDownCounter1Component implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  plusOne = () => this.count++;

  minusOne = () => this.count--;
}
