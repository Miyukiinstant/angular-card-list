import { TestBed } from '@angular/core/testing';

import { FurtrackService } from './furtrack.service';

describe('FurtrackService', () => {
  let service: FurtrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurtrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
