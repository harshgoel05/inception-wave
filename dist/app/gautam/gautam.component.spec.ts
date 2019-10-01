import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GautamComponent } from './gautam.component';

describe('GautamComponent', () => {
  let component: GautamComponent;
  let fixture: ComponentFixture<GautamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GautamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GautamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
