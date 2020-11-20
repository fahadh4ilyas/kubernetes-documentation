import { TestBed } from '@angular/core/testing';

import { BottomlinkService } from './bottomlink.service';

describe('BottomlinkService', () => {
  let service: BottomlinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomlinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
