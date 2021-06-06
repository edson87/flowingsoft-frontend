import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDatastoreService {
  private urlBackEnd = 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  public sendDateTime(dateTime: any): Observable<any> {
    return this.http.post<any>(`${this.urlBackEnd}/api/datetime`, dateTime);
  }
}
