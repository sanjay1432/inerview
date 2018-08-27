import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStartComponent } from './interview-start.component';

describe('InterviewStartComponent', () => {
  let component: InterviewStartComponent;
  let fixture: ComponentFixture<InterviewStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
