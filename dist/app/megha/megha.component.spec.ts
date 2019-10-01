import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeghaComponent } from './megha.component';

describe('MeghaComponent', () => {
  let component: MeghaComponent;
  let fixture: ComponentFixture<MeghaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeghaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeghaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
