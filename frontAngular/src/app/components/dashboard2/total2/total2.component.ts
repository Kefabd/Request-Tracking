import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-total2',
  templateUrl: './total2.component.html',
  styleUrls: ['./total2.component.css']
})
export class Total2Component implements OnInit {
  length: number;
  etudiantId: number;

  constructor(private demandesData: DemandesData) { }

  ngOnInit(): void {
    this.getAllDataEtudiant();
  }

  getAllDataEtudiant() {
    const userId = sessionStorage.getItem('userId');  // Utiliser localStorage pour obtenir userId
    // console.log("current user Id:"+userId); //4

    if (userId !== null) {

      this.demandesData.getEtudiantIdFromUserId(Number(userId)).subscribe((res: any) => {
        // console.log(res);
        this.etudiantId = res.etudiant_id;
        // console.log("Current Etudiant Id:"+this.etudiantId); //3
        this.getLengthOfDemandesEtudiant();
      });
    }
  }

  getLengthOfDemandesEtudiant() {
    this.demandesData.getAllDataEtudiant(this.etudiantId).subscribe((res: any) => {
      // console.log(res);
      this.length = res.length;
      console.log("length:"+this.length);//2
    });
  }
}
