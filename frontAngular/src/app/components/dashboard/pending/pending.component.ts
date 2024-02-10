import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrl: './pending.component.css'
})


export class PendingComponent implements OnInit{
  lengthPending : number;
  constructor(private approuvedDemandes : DemandesData) { }

  ngOnInit(): void {
    this.getApprouvedDemandes();
  }

  getApprouvedDemandes(){
    this.approuvedDemandes.getFiltredData("En Cours").subscribe((res: any) => {
      console.log(res);
      this.lengthPending = res.length;
    })
  }
}
