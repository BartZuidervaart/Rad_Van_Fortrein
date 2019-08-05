import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inzet } from '../domain/Inzet/inzet';
import { Observable } from 'rxjs';
import { environment } from '../../../src/environments/environment';

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
    return this.http.post<Inzet>(`${environment.radVanFortreinURL}/api/inzetten`,
        inzet, this.httpOptions)
  }

  public retrieveAll(): Observable<Inzet[]> {
    return this.http.get<Inzet[]>(`${environment.radVanFortreinURL}/api/inzetten`)
  }

  public retrieveById(id:number): Observable<Inzet> {
    return this.http.get<Inzet>(`${environment.radVanFortreinURL}/api/inzetten/${id}`)
  }

  public update(inzet:Inzet): Observable<Inzet> {
    return this.http.put<Inzet>(`${environment.radVanFortreinURL}/api/inzetten/${inzet.id}`,
        inzet, this.httpOptions)
  }

  public delete(id:number): Observable<void> {
    return this.http.delete<void>(`${environment.radVanFortreinURL}/api/treinen/${id}`);
  }
}
