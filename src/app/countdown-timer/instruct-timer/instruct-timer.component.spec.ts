import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructTimerComponent } from './instruct-timer.component';

describe('InstructTimerComponent', () => {
  let component: InstructTimerComponent;
  let fixture: ComponentFixture<InstructTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
