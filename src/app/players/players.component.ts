import { Component, OnInit } from '@angular/core';
import { getMatIconNameNotFoundError } from '@angular/material/icon';

export interface Players {
  voornaam: string;
  achternaam: string;
  positie: string;
  VO2max: number;
  max_snelheid: number;
}

const PLAYERS_DATE: Players[] = [
  {voornaam: 'Mimoun', achternaam: "El Asri", positie: "Keeper", VO2max:2 , max_snelheid:12},
  {voornaam: 'Simon', achternaam: "Bovy", positie: "Bench", VO2max:2 , max_snelheid:12},
  {voornaam: 'Norbert', achternaam: "Stefanski", positie: "Bench", VO2max:2 , max_snelheid:12},
  {voornaam: 'Thibau', achternaam: "Sweerts", positie: "Aanvaller", VO2max:2 , max_snelheid:12},
  {voornaam: 'Mimoun', achternaam: "El Asri", positie: "Keeper", VO2max:2 , max_snelheid:12},
  {voornaam: 'Mimoun', achternaam: "El Asri", positie: "Keeper", VO2max:2 , max_snelheid:12}
]

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  displayedColumns: string[] = ['voornaam', 'achternaam', 'positie', 'VO2max', 'max_snelheid'];
  dataSource = PLAYERS_DATE;
  constructor() { }

  ngOnInit(): void {
  }

}
