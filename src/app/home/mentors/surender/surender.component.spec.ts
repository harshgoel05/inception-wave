import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurenderComponent } from './surender.component';

describe('SurenderComponent', () => {
  let component: SurenderComponent;
  let fixture: ComponentFixture<SurenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
