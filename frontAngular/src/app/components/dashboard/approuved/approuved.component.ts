import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-approuved',
  templateUrl: './approuved.component.html',
  styleUrl: './approuved.component.css'
})
export class ApprouvedComponent implements OnInit{
  lengthApprouved : number;
  constructor(private approuvedDemandes : DemandesData) { }


  ngOnInit(): void {
    this.getApprouvedDemandes();
  }

  getApprouvedDemandes(){
    this.approuvedDemandes.getFiltredData('Traitee').subscribe((res : any) => {
      this.lengthApprouved = res.length;
    })
  }

}
