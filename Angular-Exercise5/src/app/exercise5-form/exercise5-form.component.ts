import { Component, OnInit } from '@angular/core';
import { Exercise5Service } from 'src/app/exercise-5.service';

@Component({
  selector: 'app-exercise5-form',
  templateUrl: './exercise5-form.component.html',
  styleUrls: ['./exercise5-form.component.css'],
})
export class Exercise5FormComponent implements OnInit {
  savedName: string;

  constructor(private exercise5Service: Exercise5Service) {}

  ngOnInit(): void {}

  getName(): void {
    this.savedName = this.exercise5Service.getName();
  }

  setName(inputValue): void {
    this.exercise5Service.setName(inputValue.value);
    inputValue.value = '';
  }
}
