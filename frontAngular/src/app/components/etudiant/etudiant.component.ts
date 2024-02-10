import { Component, OnInit } from '@angular/core';
import { BouchraService } from '../../services/bouchra.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent implements OnInit {
  username: string | null = null;

  constructor() {}

  ngOnInit() {
    this.username=sessionStorage.getItem('username');

  }

}
