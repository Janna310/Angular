import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpDownCounter3Component } from './up-down-counter3.component';

describe('UpDownCounter3Component', () => {
  let component: UpDownCounter3Component;
  let fixture: ComponentFixture<UpDownCounter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpDownCounter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpDownCounter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
