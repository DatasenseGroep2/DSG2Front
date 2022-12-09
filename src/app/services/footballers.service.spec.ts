import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FootballersService } from './footballers.service';

describe('FootballersService', () => {
  let service: FootballersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(FootballersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
