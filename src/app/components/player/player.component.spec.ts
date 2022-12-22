import { TestBed } from '@angular/core/testing';
import { PlayerComponent } from './player.component';
import { FootballersService } from 'src/app/services/footballers.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { Weight } from 'src/app/models/weight.model'; // Import the Weight class
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let service: FootballersService;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FootballersService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 1 } } },
        },
      ],
    });

    service = TestBed.inject(FootballersService);
    component = TestBed.createComponent(PlayerComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get footballer data and weight data on initialization', () => {
    spyOn(service, 'getFootballer').and.returnValue(
      of({
        footballerId: 1,
        firstName: 'John',
        lastName: 'Doe',
        gender: 'male',
        team: 'P1',
        position: 'Forward',
        playerStatus: 2,
        dateOfBirth: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        dominantFoot: 'left',
        length: 1.87,
      })
    );

    spyOn(service, 'getFootballerWeight').and.returnValue(
      of([
        new Weight(1, 1, 75, new Date(2022, 0o1, 0o1, 23, 59, 59, 0)),
        new Weight(2, 1, 76, new Date(2022, 0o1, 0o2, 23, 59, 59, 0)),
        new Weight(3, 1, 77, new Date(2022, 0o1, 0o3, 23, 59, 59, 0)),
      ])
    );

    component.ngOnInit();

    expect(service.getFootballer).toHaveBeenCalledWith(1);
    expect(service.getFootballerWeight).toHaveBeenCalledWith(1);
    expect(component.footballer).toEqual({
      footballerId: 1,
      firstName: 'John',
      lastName: 'Doe',
      gender: 'male',
      team: 'P1',
      position: 'Forward',
      playerStatus: 2,
      dateOfBirth: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
      dominantFoot: 'left',
      length: 1.87,
    });
    expect(component.lineChartData.labels).toEqual([
      new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
      new Date(2022, 0o1, 0o2, 23, 59, 59, 0),
      new Date(2022, 0o1, 0o3, 23, 59, 59, 0),
    ]);
    expect(component.lineChartData.datasets[0].data).toEqual([75, 76, 77]);
  });

  it('should have footballer match data on init', () => {
    spyOn(service, 'getFootballerMatches').and.returnValue(
      of([
        {
          footballerId: 1,
          matchId: 1,
          redCard: false,
          yellowCards: 1,
          dateOfMatch: new Date(2022, 0o1, 0o4, 23, 59, 59, 0),
          opponent: 'STVV',
          opponentScore: 1,
          score: 1,
        },
        {
          footballerId: 1,
          matchId: 2,
          redCard: false,
          yellowCards: 0,
          dateOfMatch: new Date(2022, 0o1, 0o5, 23, 59, 59, 0),
          opponent: 'Genk',
          opponentScore: 0,
          score: 3,
        },
      ])
    );

    component.ngOnInit();

    expect(service.getFootballerMatches).toHaveBeenCalledWith(1);
    expect(component.footballerMatches).toEqual([
      {
        footballerId: 1,
        matchId: 1,
        redCard: false,
        yellowCards: 1,
        dateOfMatch: new Date(2022, 0o1, 0o4, 23, 59, 59, 0),
        opponent: 'STVV',
        opponentScore: 1,
        score: 1,
      },
      {
        footballerId: 1,
        matchId: 2,
        redCard: false,
        yellowCards: 0,
        dateOfMatch: new Date(2022, 0o1, 0o5, 23, 59, 59, 0),
        opponent: 'Genk',
        opponentScore: 0,
        score: 3,
      },
    ]);
  });

  it('should set selected object when value is set', () => {
    component.footballerMatches = [
      { dateOfMatch: '2022-01-01', score: 3, opponentScore: 2 },
    ];
    component.selectedValue = '2022-01-01';
    component.setSelectedObject();
    expect(component.selectedObject).toEqual({
      dateOfMatch: '2022-01-01',
      score: 3,
      opponentScore: 2,
    });
  });

  it('should get calculations on initialization', () => {
    spyOn(service, 'getCalculations').and.returnValue(
      of({
        footballerId: 1,
        voTwoMax: 14,
        masHundredProcent: 3,
        totalDistance: 7,
        singleDistance: 3.5,
      })
    );

    component.ngOnInit();

    expect(service.getCalculations).toHaveBeenCalledWith(1);
    expect(component.footballer).toEqual({
      footballerId: 1,
      voTwoMax: 14,
      masHundredProcent: 3,
      totalDistance: 7,
      singleDistance: 3.5,
    });
  });
});
