import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Senior2Component } from './senior2.component';

describe('Senior2Component', () => {
  let component: Senior2Component;
  let fixture: ComponentFixture<Senior2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Senior2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Senior2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
