import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/userService';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
    constructor(private userservices:UserService,private routes:Router){
    }
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.userservices.isAuthorize()){
        return true;
      }else{
        return this.routes.navigate(['login']);
      }
    }
  
}
