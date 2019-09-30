import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VishalComponent } from './vishal.component';

describe('VishalComponent', () => {
  let component: VishalComponent;
  let fixture: ComponentFixture<VishalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VishalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VishalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
