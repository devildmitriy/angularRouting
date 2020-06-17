import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(public authService:AuthService,
    public router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>| Promise<boolean> | boolean {
    
    return this.authService.isAuthenticated().then(isAuth => {
      if(isAuth) return true;
      else {
        this.router.navigate(['/'],{queryParams: {auth: false}})
      }
    })
  }

}