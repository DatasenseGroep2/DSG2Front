import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @ViewChildren(BaseChartDirective)
    public chart: QueryList<BaseChartDirective> | undefined;
  matches: any;

  ngOnInit(): void {
    this.service.getMatches().subscribe((response) => {
      this.matches = response;
      let wins = 0;
      let losses = 0;
      let draws = 0;

      response.forEach((matches) => {
        this.lineChartData.labels?.push(matches.dateOfMatch);
        this.lineChartData.datasets[0].data.push(matches.score);

        this.lineChartData2.labels?.push(matches.dateOfMatch);
        this.lineChartData2.datasets[0].data.push(matches.opponentScore);

        if (matches.score > matches.opponentScore) {
          wins++
        }
        else if (matches.score < matches.opponentScore){
          losses++
        }
        else{
          draws++
        }
      });

      this.pieChartData.datasets[0].data.push(wins, losses, draws);
      this.chart?.forEach((child) => {
        child.chart?.update();
      })
    });
  }


  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      }
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ [ 'Overwinning' ], [ 'Verlies' ], ['Gelijkspel']],
    datasets: [ {
      data: [],
      backgroundColor: [
        'rgb(132, 212, 125)',
        'rgb(181, 80, 80)',
        'rgb(191, 186, 186)'
      ]
      
    } ]
  };

  public pieChartType: ChartType = 'pie';




  public lineChartData: ChartConfiguration['data'] = {
    datasets: [{
      data: [],
      label: 'Doelpunten',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    }
  }

  public lineChartType: ChartType = 'line';
  
  public lineChartData2: ChartConfiguration['data'] = {
    datasets: [{
      data: [],
      label: 'Tegendoelpunten',
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)',
      fill: 'origin',
    }],
    labels: []
  };

  public lineChartOptions2: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5
      }
    }
  }

  public lineChartType2: ChartType = 'line';
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Resultaten', cols: 1, rows: 1 , pieChartOptions: this.pieChartOptions, pieChartData: this.pieChartData, pieChartType: this.pieChartType},
          { title: 'Doelpunten', cols: 1, rows: 1, lineChartOptions: this.lineChartOptions, lineChartData: this.lineChartData, lineChartType: this.lineChartType },
          { title: 'Tegendoelpunten', cols: 1, rows: 1, lineChartOptions2: this.lineChartOptions2, lineChartData2: this.lineChartData2, lineChartType2: this.lineChartType2 },
        ];
      }

      return [
        { title: 'Resultaten', cols: 2, rows: 1, pieChartOptions: this.pieChartOptions, pieChartData: this.pieChartData, pieChartType: this.pieChartType},
        { title: 'Doelpunten', cols: 1, rows: 1, lineChartOptions: this.lineChartOptions, lineChartData: this.lineChartData, lineChartType: this.lineChartType },
        { title: 'Tegendoelpunten', cols: 1, rows: 1, lineChartOptions2: this.lineChartOptions2, lineChartData2: this.lineChartData2, lineChartType2: this.lineChartType2 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private service: MatchService) {}
}
