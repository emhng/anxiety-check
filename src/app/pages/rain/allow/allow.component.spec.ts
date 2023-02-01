import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowComponent } from './allow.component';

describe('AllowComponent', () => {
  let component: AllowComponent;
  let fixture: ComponentFixture<AllowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
