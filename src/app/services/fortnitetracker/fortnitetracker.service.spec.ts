import { TestBed } from '@angular/core/testing';

import { FortnitetrackerService } from './fortnitetracker.service';

describe('FortnitetrackerService', () => {
  let service: FortnitetrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortnitetrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
