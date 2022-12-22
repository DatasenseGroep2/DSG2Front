import { Component, OnInit } from '@angular/core';
import { FootballersService } from 'src/app/services/footballers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  footballer:any;
  weight:any;
  footballerMatches:any;
  selectedValue: any;
  selectedObject: any;
  match: any;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Gewicht',
        fill: false,
        tension: 0.5,
        borderColor: 'red',
        backgroundColor: 'rgba(255,30,100,0.9)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
  constructor(
    private route: ActivatedRoute,
    private service:FootballersService,
    private location: Location) { }

  ngOnInit(): void {
    this.getFootballer();
    this.getFootballerWeight();
    this.getFootballerMatch();
  }
  getFootballer() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    (this.service.getFootballer(id))
        .subscribe(response =>this.footballer = response);
  }

  getFootballerWeight() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getFootballerWeight(id)
        .subscribe(response => {
          response.forEach(weight => {
            if (weight.weight) {

              this.lineChartData.labels?.push(weight.dateOfWeight);
              this.lineChartData.datasets[0].data.push(weight.weight);
            }
          
          })
        });
      
  }

  getFootballerMatch(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    (this.service.getFootballerMatches(id))
        .subscribe(response => this.footballerMatches = response);
  }

  setSelectedObject(){
    this.selectedObject = this.footballerMatches.find((match: { dateOfMatch: Date; }) => match.dateOfMatch == this.selectedValue);
  }
}
