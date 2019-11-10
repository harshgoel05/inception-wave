import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsitComponent } from './msit.component';

describe('MsitComponent', () => {
  let component: MsitComponent;
  let fixture: ComponentFixture<MsitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
