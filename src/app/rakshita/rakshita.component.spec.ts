import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RakshitaComponent } from './rakshita.component';

describe('RakshitaComponent', () => {
  let component: RakshitaComponent;
  let fixture: ComponentFixture<RakshitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RakshitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RakshitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
