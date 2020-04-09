import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercise5FormComponent } from './exercise5-form.component';

describe('Exercise5FormComponent', () => {
  let component: Exercise5FormComponent;
  let fixture: ComponentFixture<Exercise5FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercise5FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise5FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
