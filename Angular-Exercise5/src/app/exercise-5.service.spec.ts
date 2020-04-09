import { TestBed } from '@angular/core/testing';

import { Exercise5Service } from './exercise-5.service';

describe('Exercise5Service', () => {
  let service: Exercise5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Exercise5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
