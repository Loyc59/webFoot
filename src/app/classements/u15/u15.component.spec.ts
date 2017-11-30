import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U15Component } from './u15.component';

describe('U15Component', () => {
  let component: U15Component;
  let fixture: ComponentFixture<U15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
