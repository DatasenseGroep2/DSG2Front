import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Footballer } from '../models/footballer.model';
import { map } from 'rxjs/operators';
import { Weight } from '../models/weight.model';
import { FootballerMatch } from '../models/footballer-match.model';

@Injectable({
  providedIn: 'root',
})
export class FootballersService {
  private url = 'http://13.41.54.157:8080/footballers';
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

  getFootballerMatches(id: Number): Observable<FootballerMatch[]> {
    return this.httpClient
      .get<FootballerMatch[]>('http://13.41.54.157:8080/footballerMatch/' + id)
      .pipe(
        map((data) => {
          return data;
          console.log(data);
        })
      );
  }
}
