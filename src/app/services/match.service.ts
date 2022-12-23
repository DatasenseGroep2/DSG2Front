import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Match } from '../models/match.model';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private url = environment.apiUrl + 'matches';
  constructor(private httpClient: HttpClient) { }

  getMatches(): Observable<Match[]> {
    return this.httpClient.get<Match[]>(this.url).pipe(
      map((data) => {
        return data;
      })
    );
  }
}
