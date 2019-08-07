import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inzet } from '../domain/Inzet/inzet';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InzetService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type' : 'application/json' })
  };

  constructor(
    private http : HttpClient
  ) { }

  public create (inzet : Inzet): Observable<Inzet> {
    return this.http.post<Inzet>(`${environment.radVanFortreinURL}/inzetten`,
        inzet, this.httpOptions)
  }

  public retrieveAll(): Observable<Inzet[]> {
    return this.http.get<Inzet[]>(`${environment.radVanFortreinURL}/inzetten`)
  }

  public retrieveById(id:number): Observable<Inzet> {
    return this.http.get<Inzet>(`${environment.radVanFortreinURL}/inzetten/${id}`)
  }

  public update(inzet:Inzet): Observable<Inzet> {
    return this.http.put<Inzet>(`${environment.radVanFortreinURL}/inzetten/${inzet.getId}`,
        inzet, this.httpOptions)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/treinen/${id}`);
  }
}
