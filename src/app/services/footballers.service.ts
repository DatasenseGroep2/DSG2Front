import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footballer } from '../models/footballer.model';
import { map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FootballersService {
  private url = 'http://localhost:8080/footballers'
  constructor(private httpClient: HttpClient) { }

  getFootballers(): Observable<Footballer[]>{
    return this.httpClient.get<Footballer[]>(this.url).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }
}
