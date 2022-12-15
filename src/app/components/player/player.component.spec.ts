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
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get: () => 1 } } } }
      ]
    });

    service = TestBed.get(FootballersService);
    route = TestBed.get(ActivatedRoute);
    component = TestBed.createComponent(PlayerComponent).componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get footballer data and weight data on initialization', () => {
    spyOn(service, 'getFootballer').and.returnValue(of(
      { footballerId: 1, firstName: 'John', lastName: 'Doe', gender: 'male', team: 'P1', position: 'Forward', playerStatus: 2, dateOfBirth: new Date(2022, 0O1, 0O1, 23, 59, 59, 0), dominantFoot: "left", length: 1.87 }
      ));
    spyOn(service, 'getFootballerWeight').and.returnValue(of(
      [
        new Weight(1, 1, 75, new Date(2022, 0O1, 0O1, 23, 59, 59, 0)),
        new Weight( 2, 1, 76, new Date(2022, 0O1, 0O2, 23, 59, 59, 0)),
        new Weight( 3, 1, 77, new Date(2022, 0O1, 0O3, 23, 59, 59, 0) )
      ]
    ));

    component.ngOnInit();

    expect(service.getFootballer).toHaveBeenCalledWith(1);
    expect(service.getFootballerWeight).toHaveBeenCalledWith(1);
    expect(component.footballer).toEqual({ footballerId: 1, firstName: 'John', lastName: 'Doe', gender: 'male', team: 'P1', position: 'Forward', playerStatus: 2, dateOfBirth: new Date(2022, 0O1, 0O1, 23, 59, 59, 0), dominantFoot: "left", length: 1.87});
    expect(component.lineChartData.labels).toEqual([ new Date(2022, 0O1, 0O1, 23, 59, 59, 0), new Date(2022, 0O1, 0O2, 23, 59, 59, 0), new Date(2022, 0O1, 0O3, 23, 59, 59, 0)]);
    expect(component.lineChartData.datasets[0].data).toEqual([75, 76, 77]);
  });
});