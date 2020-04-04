import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-down-counter3',
  templateUrl: './up-down-counter3.component.html',
  styleUrls: ['./up-down-counter3.component.css'],
})
export class UpDownCounter3Component implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit(): void {}

  plusOne = () => this.count++;

  minusOne = () => this.count--;
}
