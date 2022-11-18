import { TestBed } from '@angular/core/testing';

import { FootballersService } from './footballers.service';

describe('FootballersService', () => {
  let service: FootballersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
