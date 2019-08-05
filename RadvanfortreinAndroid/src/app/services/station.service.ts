import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Station } from '../domain/Station/station';
import { Observable } from 'rxjs';

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
    return this.http.post<Station>(`${environment.radVanFortreinURL}/api/stations`,
        station, this.httpOptions)
  }

  public retrieveAll(): Observable<Station[]> {
    return this.http.get<Station[]>(`${environment.radVanFortreinURL}/api/stations`)
  }

  public retrieveByNaam(naam:string): Observable<Station> {
    return this.http.get<Station>(`${environment.radVanFortreinURL}/api/stations/${naam}`)
  }

  public update(station:Station): Observable<Station> {
    return this.http.put<Station>(`${environment.radVanFortreinURL}/api/stations/${station.naam}`,
        station, this.httpOptions)
  }

  public delete(naam:string): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/api/stations/${naam}`)
  }
}
