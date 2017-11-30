import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U112Component } from './u11-2.component';

describe('U112Component', () => {
  let component: U112Component;
  let fixture: ComponentFixture<U112Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U112Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U112Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
