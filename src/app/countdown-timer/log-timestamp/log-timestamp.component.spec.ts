import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogTimestampComponent } from './log-timestamp.component';

describe('LogTimestampComponent', () => {
  let component: LogTimestampComponent;
  let fixture: ComponentFixture<LogTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogTimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
