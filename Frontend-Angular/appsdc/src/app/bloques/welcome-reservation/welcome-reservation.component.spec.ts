import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeReservationComponent } from './welcome-reservation.component';

describe('WelcomeReservationComponent', () => {
  let component: WelcomeReservationComponent;
  let fixture: ComponentFixture<WelcomeReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
