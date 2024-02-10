import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';
import { Router } from '@angular/router';
interface Demande {
  id: number;
  etat: string;
  type_document: string;
  description: string;
  niveau: string;
  filiere: string;
  annee: any;
  etudiant_id: number;
}
@Component({
  selector: 'app-main-dashboard2',
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.css'
})
export class Main2Component implements OnInit{
  etudiantId: number;
  demandes: any = [];
  selectedState: string = '';
  selectedDemande: Demande | null;
  displayDetails: boolean = false;
  currentEtudiant: any = [];
  infosType : any = [];

  constructor(private demandesData: DemandesData,private router: Router) { }

  ngOnInit(): void {
    this.getAllDemandesEtudiant();
    console.log(this.selectedState);
  }

  getAllDemandesEtudiant(){
    const userId = sessionStorage.getItem('userId');
    console.log("current user Id:"+userId); 
    if (userId !== null) {

      this.demandesData.getEtudiantIdFromUserId(Number(userId)).subscribe((res: any) => {
        // console.log(res);
        this.etudiantId = res.etudiant_id;
        console.log("Current Etudiant Id:"+this.etudiantId); //3
        this.getAllDemandes();
      });
    }

  }
  viewMore(demande: Demande){
    if(demande.etat === 'En Cours')
      this.router.navigateByUrl('/pending');
    else if(demande.etat === 'Traitee')
      this.router.navigateByUrl('/approved');

  }

  getAllDemandes() {
    this.demandesData.getAllDataEtudiant(this.etudiantId).subscribe(res => {
      console.log(res);
      this.demandes = res;
    })
  }

  onFilterChange() {
    this.selectedState === 'all' ? this.getAllDemandes() : this.demandesData.getFiltredDataEtudiant(this.etudiantId,this.selectedState).subscribe(res => {
      this.demandes = res;
    })
  }



  // private capitalizeWords(input: string): string {
  //   return input.replace(/\b\w/g, (char) => char.toUpperCase());
  // }
}
