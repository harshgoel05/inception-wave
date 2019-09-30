import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KartikComponent } from './kartik.component';

describe('KartikComponent', () => {
  let component: KartikComponent;
  let fixture: ComponentFixture<KartikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KartikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KartikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
