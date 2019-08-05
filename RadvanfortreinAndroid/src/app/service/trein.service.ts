import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trein } from '../trein';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreinService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public retreiveAll(): Observable<Trein[]>{
    return this.http.get<Trein[]>(`${environment.rvftUrl}/treinen`)
  }
  

  public retrieveByNaam(naam: string): Observable<Trein> {
    return this.http.get<Trein>(`${environment.rvftUrl}/treinen/${naam}`)
  }
}
