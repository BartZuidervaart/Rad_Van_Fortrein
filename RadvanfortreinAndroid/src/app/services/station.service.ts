import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Station } from '../domain/Station/station';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  }
  constructor(
    private http: HttpClient
  ) { }

  public create (station : Station): Observable<Station> {
    return this.http.post<Station>(`${environment.radVanFortreinURL}/stations`,
        station, this.httpOptions)
  }

  public retrieveAll(): Observable<Station[]> {
    return this.http.get<Station[]>(`${environment.radVanFortreinURL}/stations`)
  }

  public retrieveByNaam(naam:string): Observable<Station> {
    return this.http.get<Station>(`${environment.radVanFortreinURL}/stations/${naam}`)
  }

  public update(station:Station): Observable<Station> {
    return this.http.put<Station>(`${environment.radVanFortreinURL}/stations/${station.getNaam}`,
        station, this.httpOptions)
  }

  public delete(naam:string): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/stations/${naam}`)
  }
}
