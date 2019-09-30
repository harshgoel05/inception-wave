import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KritiComponent } from './kriti.component';

describe('KritiComponent', () => {
  let component: KritiComponent;
  let fixture: ComponentFixture<KritiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KritiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KritiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
