import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';



@Component({
  selector: 'app-approved2',
  templateUrl: './approved2.component.html',
  styleUrl: './approved2.component.css'
})
export class Approved2Component implements OnInit{
  approuvedData : any = [];
  etudiantId: number;
  constructor(private approuvedDemandes : DemandesData) { }

  ngOnInit(): void {
    this.getApprouvedDemandes();
  }

  getApprouvedDemandes(){
    const userId = sessionStorage.getItem('userId');
    console.log("current user Id:"+userId); 
    if (userId !== null) {

      this.approuvedDemandes.getEtudiantIdFromUserId(Number(userId)).subscribe((res: any) => {
        // console.log(res);
        this.etudiantId = res.etudiant_id;
        console.log("Current Etudiant Id is"+this.etudiantId); //3
        this.getApprouvedDemandesEtudiant();
      });
    }

  }
  
  getApprouvedDemandesEtudiant() {
    this.approuvedDemandes.getFiltredDataEtudiant(this.etudiantId,"Traitee").subscribe(res => this.approuvedData = res)

  }

}
