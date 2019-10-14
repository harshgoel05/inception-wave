import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiComponent } from './chennai.component';

describe('ChennaiComponent', () => {
  let component: ChennaiComponent;
  let fixture: ComponentFixture<ChennaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChennaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
