import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Senior1Component } from './senior1.component';

describe('Senior1Component', () => {
  let component: Senior1Component;
  let fixture: ComponentFixture<Senior1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Senior1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Senior1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
