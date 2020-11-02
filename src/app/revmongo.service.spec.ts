import { TestBed } from '@angular/core/testing';

import { RevmongoService } from './revmongo.service';

describe('RevmongoService', () => {
  let service: RevmongoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevmongoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
