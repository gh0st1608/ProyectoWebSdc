import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBlogComponent } from './welcome-blog.component';

describe('WelcomeBlogComponent', () => {
  let component: WelcomeBlogComponent;
  let fixture: ComponentFixture<WelcomeBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
