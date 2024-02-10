import { Component } from '@angular/core';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.css'
})
export class AdministrateurComponent {
  username: string | null = null;

  constructor() {}

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
  }
}
