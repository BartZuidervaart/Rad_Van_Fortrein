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
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Speler[]>{
    return this.http.get<Speler[]>(`${environment.rvftUrl}/spelers`)
  }

  public retrieveById(id: number): Observable<Speler> {
    return this.http.get<Speler>(`${environment.rvftUrl}/spelers/${id}`) 
  }

  public updatePunten(id: number, punten: number): Observable<Speler> {
    return this.http.put<Speler>(`${environment.rvftUrl}/spelers/${id}/${punten}`,
    id, this.httpOptions) 
  }
}
