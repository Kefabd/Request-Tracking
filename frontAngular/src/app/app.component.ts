import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from './services/auth.service';
import { TokenService } from './services/token.service';
import { ActivatedRoute, Route } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mainAnimation', [
      state('main-increase', style({
        'margin-left': '23%',
        'margin-right': '1%',
      })),
      state('main-decrease', style({
        'margin-left': '9%',
        'margin-right' : '3%',
      })),
      transition('main-increase <=> main-decrease', animate('400ms ease-out')),
      state('footer-increase', style({
        'margin-left': '350px',
      })),
      transition('* <=> footer-increase', animate('300ms ease-out')),
    ]),
  ],
})
export class AppComponent implements OnInit, OnChanges{
  title = 'frontAngular';
  sideNav: any = { collapsed: true };
  public loggedIn: boolean;
  public role: string | null;

  constructor(public autService:AuthService, public token:TokenService, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.autService.authStatus.subscribe(value=>this.loggedIn=value); 
    console.log(this.loggedIn);
    this.role  = sessionStorage.getItem('role');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  handleCollapsedChange($event: any): void {
    // Do something with the collapsed value
    console.log('Collapsed value:', $event);
    this.sideNav = $event; 
  }
}
