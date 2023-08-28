import { TestBed } from '@angular/core/testing';

import { NormalGuardService } from './normal-guard.service';

describe('NormalGuardService', () => {
  let service: NormalGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
