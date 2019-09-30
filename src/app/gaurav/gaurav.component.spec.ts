import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GauravComponent } from './gaurav.component';

describe('GauravComponent', () => {
  let component: GauravComponent;
  let fixture: ComponentFixture<GauravComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GauravComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GauravComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
