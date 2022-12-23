import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlayersComponent } from './players.component';
import { FootballersService } from 'src/app/services/footballers.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;
  let service: FootballersService;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayersComponent],
      imports: [HttpClientTestingModule],
      providers: [
        FootballersService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 1 } } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    service = TestBed.inject(FootballersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get footballers on init', () => {
    spyOn(service, 'getFootballers').and.returnValue(
      of([
        {
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
        },
        {
          footballerId: 2,
          firstName: 'Jane',
          lastName: 'Doe',
          gender: 'female',
          team: 'U21',
          position: 'Defender',
          playerStatus: 2,
          dateOfBirth: new Date(2022, 0o1, 0o2, 23, 59, 59, 0),
          dominantFoot: 'right',
          length: 1.85,
        },
      ])
    );

    component.ngOnInit();

    expect(service.getFootballers).toHaveBeenCalled();
    expect(component.footballers).toEqual([
      {
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
      },
      {
        footballerId: 2,
        firstName: 'Jane',
        lastName: 'Doe',
        gender: 'female',
        team: 'U21',
        position: 'Defender',
        playerStatus: 2,
        dateOfBirth: new Date(2022, 0o1, 0o2, 23, 59, 59, 0),
        dominantFoot: 'right',
        length: 1.85,
      },
    ]);
  });
});
