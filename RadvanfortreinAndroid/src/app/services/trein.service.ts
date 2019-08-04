import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Trein } from '../domain/Trein/trein';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreinService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(
    private http : HttpClient
  ) { }

  public create (trein : Trein): Observable<Trein> {
    return this.http.post<Trein>(`${environment.radVanFortreinURL}/api/treinen`,
        trein, this.httpOptions)
  }

  public retrieveAll(): Observable<Trein[]> {
    return this.http.get<Trein[]>(`${environment.radVanFortreinURL}/api/treinen`)
  }

  public retrieveByNaam(naam:string): Observable<Trein> {
    return this.http.get<Trein>(`${environment.radVanFortreinURL}/api/treinen/${naam}`)
  }

  public update(trein:Trein): Observable<Trein> {
    return this.http.put<Trein>(`${environment.radVanFortreinURL}/api/treinen/${trein.naam}`,
        trein, this.httpOptions)
  }

  public delete(naam:string): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/api/treinen/${naam}`);
  }
}
