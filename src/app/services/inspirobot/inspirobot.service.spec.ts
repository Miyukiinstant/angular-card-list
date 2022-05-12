import { TestBed } from '@angular/core/testing';

import { InspirobotService } from './inspirobot.service';

describe('InspirobotService', () => {
  let service: InspirobotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InspirobotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
