import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartpauseCountComponent } from './startpause-count.component';

describe('StartpauseCountComponent', () => {
  let component: StartpauseCountComponent;
  let fixture: ComponentFixture<StartpauseCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartpauseCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartpauseCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
