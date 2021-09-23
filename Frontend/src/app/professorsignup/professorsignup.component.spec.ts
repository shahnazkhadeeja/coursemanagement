import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsignupComponent } from './professorsignup.component';

describe('ProfessorsignupComponent', () => {
  let component: ProfessorsignupComponent;
  let fixture: ComponentFixture<ProfessorsignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
