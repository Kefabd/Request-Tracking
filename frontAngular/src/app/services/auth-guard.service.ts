import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private auth: AuthService,private Token: TokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];

    if (!this.Token.loggedIn() || (expectedRole && this.Token.getRole() !== expectedRole)) {
      // L'utilisateur n'est pas authentifié ou n'a pas le rôle attendu
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
