import { LayoutModule } from '@angular/cdk/layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { MatchService } from 'src/app/services/match.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: MatchService;
  let route: ActivatedRoute;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        MatMenuModule,
        HttpClientTestingModule,
      ],
      providers: [
        MatchService,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => 1 } } },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(HomeComponent);
    service = TestBed.inject(MatchService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });

  it('should get matches on init', () => {
    spyOn(service, 'getMatches').and.returnValue(
      of([
        {
          matchId: 1,
          dateOfMatch: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
          opponent: 'STVV',
          opponentScore: 1,
          score: 1,
        },
        {
          matchId: 1,
          dateOfMatch: new Date(2022, 0o1, 0o2, 23, 59, 59, 0),
          opponent: 'Genk',
          opponentScore: 2,
          score: 3,
        },
      ])
    );

    component.ngOnInit();

    expect(service.getMatches).toHaveBeenCalled();
    expect(component.matches).toEqual([
      {
        matchId: 1,
        dateOfMatch: new Date(2022, 0o1, 0o1, 23, 59, 59, 0),
        opponent: 'STVV',
        opponentScore: 1,
        score: 1,
      },
      {
        matchId: 1,
        dateOfMatch: new Date(2022, 0o1, 0o2, 23, 59, 59, 0),
        opponent: 'Genk',
        opponentScore: 2,
        score: 3,
      },
    ]);
  });
});
