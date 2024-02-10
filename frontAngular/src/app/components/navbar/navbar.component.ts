import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Route, Router } from '@angular/router';
import { TokenService } from '../../services/token.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('navAnimation', [
      state('increase', style({
        'margin-left': '310px',
      })),
      state('decrease', style({
        'margin-left': '90px',
      })),
      transition('increase <=> decrease', animate('400ms ease-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  public loggedIn:boolean;

  @Input() role : string | null;
  @Input() collapsed : boolean;

    constructor(
      private Auth:AuthService,
      private router:Router,
      private token:TokenService
    ) { 
      this.loggedIn = false; // Initialize loggedIn property
    }

    ngOnInit(){
      this.Auth.authStatus.subscribe(value=>this.loggedIn=value); 
      this.role = sessionStorage.getItem('role');
      console.log(this.collapsed);
    }

    logout(event:MouseEvent){
      event.preventDefault();
      this.Auth.logout();
    }
    
}
