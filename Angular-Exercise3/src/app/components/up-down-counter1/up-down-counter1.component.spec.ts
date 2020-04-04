import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownCounter1Component } from './up-down-counter1.component';

describe('UpDownCounter1Component', () => {
  let component: UpDownCounter1Component;
  let fixture: ComponentFixture<UpDownCounter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownCounter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownCounter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
