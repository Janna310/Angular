import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownCounter2Component } from './up-down-counter2.component';

describe('UpDownCounter2Component', () => {
  let component: UpDownCounter2Component;
  let fixture: ComponentFixture<UpDownCounter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownCounter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownCounter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
