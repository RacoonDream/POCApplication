import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserSettings } from './user-settings';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings): Observable<any> {
 //return of(userSettings);
 return this.http.post('https://putsreq.com/0aSeAnZ0quCtaClrXEKR', userSettings);
  }

  getSubscriptionType(): Observable<string[]> {
   return of(['Monthly', 'Yearly']);
  }
}
