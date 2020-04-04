import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter2',
  templateUrl: './up-down-counter2.component.html',
  styleUrls: ['./up-down-counter2.component.css'],
})
export class UpDownCounter2Component implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  plusOne = () => this.count++;

  minusOne = () => this.count--;
}
