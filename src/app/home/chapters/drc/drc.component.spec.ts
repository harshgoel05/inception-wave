import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrcComponent } from './drc.component';

describe('DrcComponent', () => {
  let component: DrcComponent;
  let fixture: ComponentFixture<DrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
