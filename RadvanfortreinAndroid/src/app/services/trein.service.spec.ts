import { TestBed } from '@angular/core/testing';

import { TreinService } from './trein.service';

describe('TreinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinService = TestBed.get(TreinService);
    expect(service).toBeTruthy();
  });
});
