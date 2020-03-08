import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldPlanComponent } from './gold-plan.component';

describe('GoldPlanComponent', () => {
  let component: GoldPlanComponent;
  let fixture: ComponentFixture<GoldPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
