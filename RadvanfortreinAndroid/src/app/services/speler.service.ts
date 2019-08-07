import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Speler } from '../domain/Speler/speler';
import { environment } from '../../environments/environment';

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
    return this.http.post<Speler>(`${environment.radVanFortreinURL}/spelers`,
        speler, this.httpOptions)
  }

  public retrieveAll(): Observable<Speler[]> {
    return this.http.get<Speler[]>(`${environment.radVanFortreinURL}/spelers`)
  }

  public retrieveById(id:number): Observable<Speler> {
    return this.http.get<Speler>(`${environment.radVanFortreinURL}/spelers/${id}`)
  }

  public update(speler:Speler): Observable<Speler> {
    return this.http.put<Speler>(`${environment.radVanFortreinURL}/spelers/${speler.getId}`,
        speler, this.httpOptions)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/spelers/${id}`);
  }
}
