import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormguidesComponent } from './formguides.component';

describe('FormguidesComponent', () => {
  let component: FormguidesComponent;
  let fixture: ComponentFixture<FormguidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormguidesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormguidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
