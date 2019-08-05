import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inzet } from '../inzet';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class InzetService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  public retrieveAll(): Observable<Inzet[]>{
    return this.http.get<Inzet[]>(`${environment.rvftUrl}/inzetten`)
  }

  public retrieveById(id: number): Observable<Inzet> {
    return this.http.get<Inzet>(`${environment.rvftUrl}/inzetten/${id}`)
  }
}
