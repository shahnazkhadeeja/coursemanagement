import { TestBed } from '@angular/core/testing';

import { AuthprofessorService } from './authprofessor.service';

describe('AuthprofessorService', () => {
  let service: AuthprofessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthprofessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
