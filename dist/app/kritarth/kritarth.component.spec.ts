import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KritarthComponent } from './kritarth.component';

describe('KritarthComponent', () => {
  let component: KritarthComponent;
  let fixture: ComponentFixture<KritarthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KritarthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KritarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
