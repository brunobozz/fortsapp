import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FortnitetrackerService {
  private API_PREV1 = environment.apiUrlV1;
  private API_PREV2 = environment.apiUrlV2;
  private LENGUAGE = window.localStorage.getItem('language');

  constructor(private http: HttpClient) {}

  public getDataV1(endpoint: string) {
    return this.http.get(
      this.API_PREV1 + endpoint + '?language=' + this.LENGUAGE
    );
  }

  public getDataV2(endpoint: string) {
    return this.http.get(
      this.API_PREV2 + endpoint + '?language=' + this.LENGUAGE
    );
  }

  public changeLanguage(language: string) {
    window.localStorage.setItem('language', language);
    window.location.reload();
  }
}
