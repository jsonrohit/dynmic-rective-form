import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

constructor(private router: Router) { }

intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // return next.handle(request);
    // let localdata:any = localStorage.getItem('userData')
    // let data = JSON.parse(localdata);
    // if (data) {
        const tokenReq = request.clone({
            setHeaders: {
                Authkey: `test-angular-2021`,
            }
        });
        console.log('ffffffffffffff');
        return next.handle(tokenReq);
    // }    
   
}   


}
