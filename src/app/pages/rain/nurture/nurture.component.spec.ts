import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurtureComponent } from './nurture.component';

describe('NurtureComponent', () => {
  let component: NurtureComponent;
  let fixture: ComponentFixture<NurtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurtureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
