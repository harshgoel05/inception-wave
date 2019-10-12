import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mentor1Component } from './mentor1.component';

describe('Mentor1Component', () => {
  let component: Mentor1Component;
  let fixture: ComponentFixture<Mentor1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mentor1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mentor1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
