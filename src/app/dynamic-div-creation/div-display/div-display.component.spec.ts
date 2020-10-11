import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivDisplayComponent } from './div-display.component';

describe('DivDisplayComponent', () => {
  let component: DivDisplayComponent;
  let fixture: ComponentFixture<DivDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
