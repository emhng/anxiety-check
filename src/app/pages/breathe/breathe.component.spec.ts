import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreatheComponent } from './breathe.component';

describe('BreatheComponent', () => {
  let component: BreatheComponent;
  let fixture: ComponentFixture<BreatheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreatheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
