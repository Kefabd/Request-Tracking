import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-pending2',
  templateUrl: './pending2.component.html',
  styleUrl: './pending2.component.css'
})
export class Pending2Component implements OnInit{
  lengthPending : number;
  etudiantId: number;
  constructor(private approuvedDemandes : DemandesData) { }

  ngOnInit(): void {
    this.getApprouvedDemandesEtudiant();
  }

  getApprouvedDemandesEtudiant(){
    const userId = sessionStorage.getItem('userId');
    console.log("current user Id:"+userId); 
    if (userId !== null) {

      this.approuvedDemandes.getEtudiantIdFromUserId(Number(userId)).subscribe((res: any) => {
        // console.log(res);
        this.etudiantId = res.etudiant_id;
        console.log("Current Etudiant Id:"+this.etudiantId); //3
        this.getLengthOfPendingDemandesEtudiant();
      });
    }

  }
  
  getLengthOfPendingDemandesEtudiant() {
    this.approuvedDemandes.getFiltredDataEtudiant(this.etudiantId,"En Cours").subscribe((res: any) => {
      console.log(res);
      this.lengthPending = res.length;
    })
  }

}
