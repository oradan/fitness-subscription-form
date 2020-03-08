import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SilverPlanComponent } from './silver-plan.component';

describe('SilverPlanComponent', () => {
  let component: SilverPlanComponent;
  let fixture: ComponentFixture<SilverPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SilverPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SilverPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
