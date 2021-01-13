import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCourseComponent } from './global-course.component';

describe('GlobalCourseComponent', () => {
  let component: GlobalCourseComponent;
  let fixture: ComponentFixture<GlobalCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
