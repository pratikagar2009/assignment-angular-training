import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingBannerComponent } from './floating-banner.component';

describe('FloatingBannerComponent', () => {
  let component: FloatingBannerComponent;
  let fixture: ComponentFixture<FloatingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
