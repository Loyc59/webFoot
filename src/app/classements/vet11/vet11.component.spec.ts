import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vet11Component } from './vet11.component';

describe('Vet11Component', () => {
  let component: Vet11Component;
  let fixture: ComponentFixture<Vet11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vet11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vet11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
