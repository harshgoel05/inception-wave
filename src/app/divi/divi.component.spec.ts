import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiviComponent } from './divi.component';

describe('DiviComponent', () => {
  let component: DiviComponent;
  let fixture: ComponentFixture<DiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
