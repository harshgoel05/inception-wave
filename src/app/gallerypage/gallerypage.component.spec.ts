import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerypageComponent } from './gallerypage.component';

describe('GallerypageComponent', () => {
  let component: GallerypageComponent;
  let fixture: ComponentFixture<GallerypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
