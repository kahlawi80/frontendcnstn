import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadatedirComponent } from './upadatedir.component';

describe('UpadatedirComponent', () => {
  let component: UpadatedirComponent;
  let fixture: ComponentFixture<UpadatedirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadatedirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpadatedirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
