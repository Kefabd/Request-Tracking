import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  private loggedIn = new BehaviorSubject<boolean>(this.toke.loggedIn());
  authStatus = this.loggedIn.asObservable();
  loginState : boolean = false;

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
    this.loginState = value;
  }
  constructor(private toke: TokenService, private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.authStatus)
  }
  getStatus(){
    return this.loginState;
  }
  logout(){
    this.toke.remove();
    sessionStorage.clear();
    this.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
