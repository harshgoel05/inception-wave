import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivangComponent } from './shivang.component';

describe('ShivangComponent', () => {
  let component: ShivangComponent;
  let fixture: ComponentFixture<ShivangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShivangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShivangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
