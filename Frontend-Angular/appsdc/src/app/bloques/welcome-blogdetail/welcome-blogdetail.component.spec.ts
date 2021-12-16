import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBlogdetailComponent } from './welcome-blogdetail.component';

describe('WelcomeBlogdetailComponent', () => {
  let component: WelcomeBlogdetailComponent;
  let fixture: ComponentFixture<WelcomeBlogdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBlogdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBlogdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
