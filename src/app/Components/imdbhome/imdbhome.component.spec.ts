import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImdbhomeComponent } from './imdbhome.component';

describe('ImdbhomeComponent', () => {
  let component: ImdbhomeComponent;
  let fixture: ComponentFixture<ImdbhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImdbhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImdbhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
