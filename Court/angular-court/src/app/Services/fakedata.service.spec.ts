import { TestBed } from '@angular/core/testing';

import { FakedataService } from './fakedata.service';

describe('FakedataService', () => {
  let service: FakedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
