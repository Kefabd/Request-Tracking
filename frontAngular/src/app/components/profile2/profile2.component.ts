import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-profile2',
  templateUrl: './profile2.component.html',
  styleUrls: ['./profile2.component.css']
})
export class Profile2Component implements OnInit {
  username: string | null = null;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    // this.username = this.tokenService.getUsername();
    this.username=sessionStorage.getItem('username');
  }
}
