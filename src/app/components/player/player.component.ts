import { Component, OnInit } from '@angular/core';
import { FootballersService } from 'src/app/services/footballers.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  footballer:any;
  constructor(
    private route: ActivatedRoute,
    private service:FootballersService,
    private location: Location) { }

  ngOnInit(): void {
    this.getFootballer();
  }
  getFootballer() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getFootballer(id)
        .subscribe(footballer =>this.footballer = footballer);
  }

}
