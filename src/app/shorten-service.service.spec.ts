import { TestBed } from '@angular/core/testing';

import { ShortenServiceService } from './shorten-service.service';

describe('ShortenServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortenServiceService = TestBed.get(ShortenServiceService);
    expect(service).toBeTruthy();
  });
});
