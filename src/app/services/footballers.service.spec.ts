import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { FootballersService } from './footballers.service';
import { Footballer } from '../models/footballer.model';
import { Weight } from '../models/weight.model';

describe('FootballersService', () => {
  let service: FootballersService;
  let httpMock: HttpTestingController;
  let url = 'http://13.41.54.157:8080';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FootballersService],
    });

    service = TestBed.get(FootballersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get a list of footballers', () => {
    const expectedFootballers = [
      {
        footballerId: 1,
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        team: 'P1',
        position: 'Forward',
        playerStatus: 2,
        dateOfBirth: new Date(),
        dominantFoot: 'left',
        length: 1.87,
      },
      {
        footballerId: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'male',
        team: 'P1',
        position: 'Defender',
        playerStatus: 1,
        dateOfBirth: new Date(),
        dominantFoot: 'right',
        length: 1.89,
      },
    ];

    service.getFootballers().subscribe((footballers) => {
      expect(footballers).toEqual(expectedFootballers);
    });

    const req = httpMock.expectOne(url + '/footballers');
    expect(req.request.method).toBe('GET');
    req.flush(expectedFootballers);
  });

  it('should get a footballer by id', () => {
    const expectedFootballer = {
      footballerId: 1,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      team: 'P1',
      position: 'Forward',
      playerStatus: 2,
      dateOfBirth: new Date(),
      dominantFoot: 'left',
      length: 1.87,
    };
    service.getFootballer(1).subscribe((footballer) => {
      expect(footballer).toEqual(expectedFootballer);
    });

    const req = httpMock.expectOne(url + '/footballers/1');
    expect(req.request.method).toBe('GET');
    req.flush(expectedFootballer);
  });

  it("should get a footballer's weight data", () => {
    const expectedWeights = [
      {
        dateOfWeight: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        weight: 80,
        weightId: 1,
        footballerId: 1,
      },
      {
        dateOfWeight: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        weight: 82,
        weightId: 2,
        footballerId: 2,
      },
    ];

    service.getFootballerWeight(1).subscribe((weights) => {
      expect(weights).toEqual(expectedWeights);
    });

    const req = httpMock.expectOne(url + '/footballers/1/weight');
    expect(req.request.method).toBe('GET');
    req.flush(expectedWeights);
  });

  it("should get a footballer's matches", () => {
    const expectedFootballerMatches = [
      {
        footballerId: 1,
        matchId: 1,
        redCard: false,
        yellowCards: 1,
        dateOfMatch: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        opponent: 'STVV',
        opponentScore: 1,
        score: 1,
      },
      {
        footballerId: 2,
        matchId: 2,
        redCard: true,
        yellowCards: 0,
        dateOfMatch: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        opponent: 'Genk',
        opponentScore: 0,
        score: 3,
      },
    ];
    service.getFootballerMatches(1).subscribe((footballerMatches) => {
      expect(footballerMatches).toEqual(expectedFootballerMatches);
    });
    const req = httpMock.expectOne(url + '/footballerMatch/1');
    expect(req.request.method).toBe('GET');
    req.flush(expectedFootballerMatches);
  });
});
