import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SukritiComponent } from './sukriti.component';

describe('SukritiComponent', () => {
  let component: SukritiComponent;
  let fixture: ComponentFixture<SukritiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SukritiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SukritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
