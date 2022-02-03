import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string;

  constructor(private _http: HttpClient) {
    this.apiUrl = 'https://paysprint.in/service-api/testangular/api/TestAngular/';
    this.isAuthorize();
  }

  get(url: string): Observable<any> {
    var urlStr = this.apiUrl + url;
    return this._http.get(urlStr);
  }

  post(url: string, body:any): Observable<any> {
    var urlStr = this.apiUrl + url;
    return this._http.post(urlStr, body);
  }


  isAuthorize() {
    if (localStorage.getItem('userData')){
      return true;
    }else{
        return false;
    }
  }

}