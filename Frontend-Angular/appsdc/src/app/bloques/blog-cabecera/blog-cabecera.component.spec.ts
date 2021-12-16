import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCabeceraComponent } from './blog-cabecera.component';

describe('BlogCabeceraComponent', () => {
  let component: BlogCabeceraComponent;
  let fixture: ComponentFixture<BlogCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCabeceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
