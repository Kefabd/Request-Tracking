import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  role : string | null;
   
  //  getFiltredDemande(state: String){
  //     this.demandesData.getFiltredData().subscribe(res => {
  //       console.log(res);
  //       this.demandes = res;
  //     })
  // }

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }
}
