import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomFormComponent } from './user-custom-form.component';

describe('UserCustomFormComponent', () => {
  let component: UserCustomFormComponent;
  let fixture: ComponentFixture<UserCustomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCustomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCustomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
