import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaganComponent } from './gagan.component';

describe('GaganComponent', () => {
  let component: GaganComponent;
  let fixture: ComponentFixture<GaganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
