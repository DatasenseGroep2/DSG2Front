import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeightService {
  private url = 'http://13.41.54.157:8080/footballers/{id}/weight';
}
