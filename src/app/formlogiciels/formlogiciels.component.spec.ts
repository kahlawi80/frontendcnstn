import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlogicielsComponent } from './formlogiciels.component';

describe('FormlogicielsComponent', () => {
  let component: FormlogicielsComponent;
  let fixture: ComponentFixture<FormlogicielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlogicielsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlogicielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
