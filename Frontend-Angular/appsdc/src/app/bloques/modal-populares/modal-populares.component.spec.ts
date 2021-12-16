import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopularesComponent } from './modal-populares.component';

describe('ModalPopularesComponent', () => {
  let component: ModalPopularesComponent;
  let fixture: ComponentFixture<ModalPopularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPopularesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
