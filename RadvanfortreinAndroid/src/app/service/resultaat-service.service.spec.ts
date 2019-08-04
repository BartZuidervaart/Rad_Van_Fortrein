import { TestBed } from '@angular/core/testing';

import { ResultaatServiceService } from './resultaat-service.service';

describe('ResultaatServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResultaatServiceService = TestBed.get(ResultaatServiceService);
    expect(service).toBeTruthy();
  });
});
