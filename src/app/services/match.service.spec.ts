import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MatchService } from './match.service';
import { environment } from '../../environments/environment';

describe('MatchService', () => {
  let service: MatchService;
  let httpMock: HttpTestingController;
  let url = environment.apiUrl;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatchService],
    });

    service = TestBed.inject(MatchService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of matches', () => {
    const expectedMatches = [
      {
        matchId: 1,
        dateOfMatch: new Date(),
        opponent: 'STVV',
        opponentScore: 1,
        score: 1,
      },
      {
        matchId: 1,
        dateOfMatch: new Date(),
        opponent: 'Genk',
        opponentScore: 2,
        score: 3,
      },
    ];

    service.getMatches().subscribe((matches) => {
      expect(matches).toEqual(expectedMatches);
    });

    const req = httpMock.expectOne(url + 'matches');
    expect(req.request.method).toBe('GET');
    req.flush(expectedMatches);
  });
});
