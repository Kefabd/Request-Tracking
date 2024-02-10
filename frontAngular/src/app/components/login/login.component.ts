import { Component, OnInit } from '@angular/core';
import { BouchraService } from '../../services/bouchra.service';
import { TokenService } from '../../services/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  }
  constructor(
    private bouchra: BouchraService,
    private token: TokenService,
    private router: Router,
    private auth: AuthService,
  ) { }
  public error = null;



  onSubmit() {
    // console.log(this.form);
    this.bouchra.login(this.form).subscribe(
      // data=> console.log(data),
      data => this.handleResponse(data),
      error => this.handleError(error),
    );
  }
  handleError(error: any) {
    this.error = error.error.error;
  }
  // Dans LoginComponent

  handleResponse(data: any) {
    this.token.handle(data.access_token);
    this.auth.changeAuthStatus(true);

    const userRole = this.token.getRole();
    const username = data.user_nom;  // Add this line to get the username from the response
    const user_prenom = data.user_prenom;  // Add this line to get the username from the response
    const userId = data.userId;

    console.log(userRole)
    console.log(username)
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('userprenom', user_prenom);
    sessionStorage.setItem('userId', userId);
    sessionStorage.setItem('role', userRole);
    if (username) {
      this.router.navigateByUrl('/dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {

  }

}
