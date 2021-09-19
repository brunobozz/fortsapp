import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FortnitetrackerService {
  private API_PREFIX = environment.apiUrl;
  private LENGUAGE = window.localStorage.getItem('language');

  constructor(private http: HttpClient) {}

  public getData(version: string, endpoint: string) {
    return this.http.get(this.API_PREFIX + version + endpoint);
  }

  public getDataLang(version: string, endpoint: string) {
    return this.http.get(
      this.API_PREFIX + version + endpoint + '?language=' + this.LENGUAGE
    );
  }

  public changeLanguage(language: string) {
    window.localStorage.setItem('language', language);
    window.location.reload();
  }
}
