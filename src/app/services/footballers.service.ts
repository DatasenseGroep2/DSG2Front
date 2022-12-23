import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footballer } from '../models/footballer.model';
import { map } from 'rxjs/operators';
import { Weight } from '../models/weight.model';
import { FootballerMatch } from '../models/footballer-match.model';
import { environment } from '../../environments/environment';
import { Calculation } from '../models/calculation.model';

@Injectable({
  providedIn: 'root',
})
export class FootballersService {
  private url = environment.apiUrl + 'footballers';
  constructor(private httpClient: HttpClient) {}

  getFootballers(): Observable<Footballer[]> {
    return this.httpClient.get<Footballer[]>(this.url).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getFootballer(id: number): Observable<Footballer> {
    return this.httpClient.get<Footballer>(this.url + '/' + id).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getFootballerWeight(id: number): Observable<Weight[]> {
    return this.httpClient.get<Weight[]>(this.url + '/' + id + '/weight').pipe(
      map((data) => {
        return data;
      })
    );
  }

  getFootballerMatches(id: number): Observable<FootballerMatch[]> {
    return this.httpClient
      .get<FootballerMatch[]>(environment.apiUrl + 'footballerMatch/' + id)
      .pipe(
        map((data) => {
          return data;
        })
      );
  }

  getCalculations(id: number): Observable<Calculation> {
    return this.httpClient
      .get<Calculation>(this.url + '/' + id + '/calculations')
      .pipe(
        map((data) => {
          return data;
        })
      );
  }
}
