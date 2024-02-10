import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';

@Component({
  selector: 'app-encours2',
  templateUrl: './encours2.component.html',
  styleUrl: './encours2.component.css'
})
export class Encours2Component implements OnInit {
  EnCoursData : any = [];
  etudiantId: number;

  constructor(private EnCoursDemandes : DemandesData) {}

  ngOnInit(): void {
    this.getEnCoursDemandes();
  }
  getEnCoursDemandes(){
    const userId = sessionStorage.getItem('userId');
    console.log("current user Id:"+userId); 
    if (userId !== null) {

      this.EnCoursDemandes.getEtudiantIdFromUserId(Number(userId)).subscribe((res: any) => {
        // console.log(res);
        this.etudiantId = res.etudiant_id;
        console.log("Current Etudiant Id is"+this.etudiantId); 
        this.getEnCoursDemandesEtudiant();
      });
    }

  }
  getEnCoursDemandesEtudiant() {
    this.EnCoursDemandes.getFiltredDataEtudiant(this.etudiantId,"En Cours").subscribe(res => this.EnCoursData = res)

  }
}
