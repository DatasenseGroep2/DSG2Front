import { Component, OnInit } from '@angular/core';
import { FootballersService } from '../../services/footballers.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  footballers:any;
  displayedColumns: string[] = ['voornaam', 'achternaam','team', 'positie'];
  constructor(private service:FootballersService) { }

  ngOnInit(): void {
    this.service.getFootballers().subscribe(response => {this.footballers = response});
  }

}
