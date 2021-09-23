import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsloginComponent } from './studentslogin.component';

describe('StudentsloginComponent', () => {
  let component: StudentsloginComponent;
  let fixture: ComponentFixture<StudentsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
