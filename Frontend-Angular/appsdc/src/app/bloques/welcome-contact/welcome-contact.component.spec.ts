import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeContactComponent } from './welcome-contact.component';

describe('WelcomeContactComponent', () => {
  let component: WelcomeContactComponent;
  let fixture: ComponentFixture<WelcomeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
