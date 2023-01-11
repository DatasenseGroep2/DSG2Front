import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
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
          wins++;
        } else if (matches.score < matches.opponentScore) {
          losses++;
        } else {
          draws++;
        }
      });

      this.barChartData.datasets[0].data.push(wins, losses, draws);
      this.chart?.forEach((child) => {
        child.chart?.update();
      });
    });
  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };
  public barChartData: ChartData<'bar', number[], string | string[]> = {
    labels: [['Overwinning'], ['Verlies'], ['Gelijkspel']],
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgb(132, 212, 125)',
          'rgb(181, 80, 80)',
          'rgb(191, 186, 186)',
        ],
      },
    ],
  };

  public barChartType: ChartType = 'bar';

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Doelpunten',
        backgroundColor: 'rgba(132, 212, 125)',
        borderColor: 'rgba(53, 245, 37)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(132, 212, 125)',
        pointBorderColor: 'rgba(53, 245, 37)',
        pointHoverBackgroundColor: 'rgba(53, 245, 37)',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
  };

  public lineChartType: ChartType = 'line';

  public lineChartData2: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Tegendoelpunten',
        backgroundColor: 'rgba(181, 80, 80)',
        borderColor: 'rgba(227, 32, 32)',
        borderWidth: 1,
        pointBackgroundColor: 'rgba(181, 80, 80)',
        pointBorderColor: 'rgba(227, 32, 3)',
        pointHoverBackgroundColor: 'rgba(227, 32, 3)',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [],
  };

  public lineChartOptions2: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  public lineChartType2: ChartType = 'line';

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            title: 'Resultaten',
            cols: 1,
            rows: 1,
            barChartOptions: this.barChartOptions,
            barChartData: this.barChartData,
            barChartType: this.barChartType,
          },
          {
            title: 'Doelpunten',
            cols: 1,
            rows: 1,
            lineChartOptions: this.lineChartOptions,
            lineChartData: this.lineChartData,
            lineChartType: this.lineChartType,
          },
          {
            title: 'Tegendoelpunten',
            cols: 1,
            rows: 1,
            lineChartOptions2: this.lineChartOptions2,
            lineChartData2: this.lineChartData2,
            lineChartType2: this.lineChartType2,
          },
        ];
      }

      return [
        {
          title: 'Resultaten',
          cols: 2,
          rows: 1,
          barChartOptions: this.barChartOptions,
          barChartData: this.barChartData,
          barChartType: this.barChartType,
        },
        {
          title: 'Doelpunten',
          cols: 1,
          rows: 1,
          lineChartOptions: this.lineChartOptions,
          lineChartData: this.lineChartData,
          lineChartType: this.lineChartType,
        },
        {
          title: 'Tegendoelpunten',
          cols: 1,
          rows: 1,
          lineChartOptions2: this.lineChartOptions2,
          lineChartData2: this.lineChartData2,
          lineChartType2: this.lineChartType2,
        },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: MatchService
  ) {}
}
