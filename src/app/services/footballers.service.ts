import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footballer } from '../models/footballer.model';
import { map } from 'rxjs/operators'
import { Weight } from '../models/weight.model';


@Injectable({
  providedIn: 'root'
})
export class FootballersService {

  private url = 'http://13.41.215.220:8080/footballers'
  constructor(private httpClient: HttpClient) { }

  getFootballers(): Observable<Footballer[]> {
    return this.httpClient.get<Footballer[]>(this.url).pipe(
      map(data => {
        return data;
      })
    );
  }

  getFootballer(id: number): Observable<Footballer> {
    return this.httpClient.get<Footballer>(this.url + "/" + id).pipe(
      map(data => {
        return data;
      })
    )
  }

  getFootballerWeight(id: number): Observable<Weight[]> {
    return this.httpClient.get<Weight[]>(this.url + "/" + id + "/weight").pipe(
      map(data => {
        return data;
      })
    )
  }
}
