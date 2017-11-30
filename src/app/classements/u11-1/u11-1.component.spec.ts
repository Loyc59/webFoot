import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { U111Component } from './u11-1.component';

describe('U111Component', () => {
  let component: U111Component;
  let fixture: ComponentFixture<U111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ U111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(U111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
