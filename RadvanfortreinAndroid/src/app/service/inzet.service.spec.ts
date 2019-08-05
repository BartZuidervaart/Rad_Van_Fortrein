import { TestBed } from '@angular/core/testing';

import { InzetService } from './inzet.service';

describe('InzetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InzetService = TestBed.get(InzetService);
    expect(service).toBeTruthy();
  });
});
