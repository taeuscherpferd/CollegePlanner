import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from "rxjs"
import { Injectable, Inject } from '@angular/core';
import { AUTH_SERVICE } from '../interfaces/tokens/auth-service-interface.token';
import { IAuthService } from '../interfaces/services/auth-service.interface';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService, private router: Router) { } 

  canActivate(_route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot):
    boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.authService.getIsAuth()

    if (!isAuth) {
      this.router.navigate(['/login'])
    }

    return true
  }
}