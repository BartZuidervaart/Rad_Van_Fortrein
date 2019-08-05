import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Speler } from '../domain/Speler/speler';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpelerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(
    private http : HttpClient
  ) { }

  public create (speler : Speler): Observable<Speler> {
    return this.http.post<Speler>(`${environment.radVanFortreinURL}/api/spelers`,
        speler, this.httpOptions)
  }

  public retrieveAll(): Observable<Speler[]> {
    return this.http.get<Speler[]>(`${environment.radVanFortreinURL}/api/spelers`)
  }

  public retrieveById(id:number): Observable<Speler> {
    return this.http.get<Speler>(`${environment.radVanFortreinURL}/api/spelers/${id}`)
  }

  public update(speler:Speler): Observable<Speler> {
    return this.http.put<Speler>(`${environment.radVanFortreinURL}/api/spelers/${speler.id}`,
        speler, this.httpOptions)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/api/spelers/${id}`);
  }
}
