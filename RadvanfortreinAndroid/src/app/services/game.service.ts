import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../domain/Game/game';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json'})
  }

  constructor(
    private http : HttpClient
  ) { }

  public create (game : Game): Observable<Game> {
    return this.http.post<Game>(`${environment.radVanFortreinURL}/games`,
        game, this.httpOptions)
  }

  public retrieveAll(): Observable<Game[]> {
    return this.http.get<Game[]>(`${environment.radVanFortreinURL}/games`)
  }

  public retrieveById(id:number): Observable<Game> {
    return this.http.get<Game>(`${environment.radVanFortreinURL}/games/${id}`)
  }

  public update(game:Game): Observable<Game> {
    return this.http.put<Game>(`${environment.radVanFortreinURL}/games/${game.id}`,
        game, this.httpOptions)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/games/${id}`);
  }
}
