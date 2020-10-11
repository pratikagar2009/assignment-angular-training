import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCountdownComponent } from './display-countdown.component';

describe('DisplayCountdownComponent', () => {
  let component: DisplayCountdownComponent;
  let fixture: ComponentFixture<DisplayCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCountdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
