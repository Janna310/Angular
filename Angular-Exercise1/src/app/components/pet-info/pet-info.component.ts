import { Component, OnInit } from '@angular/core';
import { Pet } from '../../interfaces/pet';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.css'],
})
export class PetInfoComponent implements OnInit {
  pet: Pet = {
    name: 'Willy',
    breed: 'Whale',
  };

  address = {};

  stuff = 'hello';
  constructor() {}

  ngOnInit(): void {}
}
