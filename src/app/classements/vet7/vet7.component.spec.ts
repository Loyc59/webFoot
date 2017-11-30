import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vet7Component } from './vet7.component';

describe('Vet7Component', () => {
  let component: Vet7Component;
  let fixture: ComponentFixture<Vet7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vet7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vet7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
