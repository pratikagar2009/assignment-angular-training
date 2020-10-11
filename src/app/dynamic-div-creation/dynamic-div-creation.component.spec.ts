import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDivCreationComponent } from './dynamic-div-creation.component';

describe('DynamicDivCreationComponent', () => {
  let component: DynamicDivCreationComponent;
  let fixture: ComponentFixture<DynamicDivCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicDivCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicDivCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
