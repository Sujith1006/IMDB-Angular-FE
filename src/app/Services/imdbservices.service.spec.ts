import { TestBed } from '@angular/core/testing';

import { ImdbservicesService } from './imdbservices.service';

describe('ImdbservicesService', () => {
  let service: ImdbservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImdbservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
