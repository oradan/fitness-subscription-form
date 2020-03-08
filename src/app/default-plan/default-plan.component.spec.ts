import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPlanComponent } from './default-plan.component';

describe('DefaultPlanComponent', () => {
  let component: DefaultPlanComponent;
  let fixture: ComponentFixture<DefaultPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
