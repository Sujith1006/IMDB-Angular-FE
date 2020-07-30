import { TestBed } from '@angular/core/testing';

import { LoginservieService } from './loginservie.service';

describe('LoginservieService', () => {
  let service: LoginservieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginservieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
