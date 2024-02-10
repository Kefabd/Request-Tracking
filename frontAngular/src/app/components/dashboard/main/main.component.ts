import { Component, OnInit } from '@angular/core';
import { DemandesData } from '../../../services/dashboard/demande-data.service';
import { HttpClient } from '@angular/common/http';
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
  selector: 'app-main-dashboard',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit {
  demandes: any = [];
  selectedState: string = '';
  selectedDemande: Demande | null;
  displayDetails: boolean = false;
  currentEtudiant: any = [];
  infosType: any = [];

  constructor(private demandesData: DemandesData,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getAllDemandes();
    console.log(this.selectedState);
  }

  // validerDemande(demande: any): void {
  //   console.log('Fonction validerDemande appelée', demande);

  //   if (demande.etat === 'En Cours') {
  //     demande.etat = 'Traitee';

  //     // Faites appel à votre API pour mettre à jour la base de données
  //     this.http.post(`http://127.0.0.1:8000/api/demande/update-etat/${demande.id}`, { nouvelEtat: 'Traitee' })
  //       .subscribe(response => {
  //         console.log('État de la demande mis à jour dans la base de données', response);
  //       }, error => {
  //         console.error('Erreur lors de la mise à jour de l\'état de la demande', error);
  //         // Si la mise à jour échoue, vous voudrez probablement annuler la modification côté client
  //         demande.etat = 'En Cours';
  //       });
  //   }
  // }
  
  getAllDemandes() {
    this.demandesData.getAllData().subscribe(res => {
      console.log(res);
      this.demandes = res;
    })
  }

  onFilterChange() {
    this.selectedState === 'all' ? this.getAllDemandes() : this.demandesData.getFiltredData(this.selectedState).subscribe(res => {
      this.demandes = res;
    })
  }

  viewMore(demande: Demande){
    if(demande.etat === 'En Cours')
      this.router.navigateByUrl('/pending');
    else if(demande.etat === 'Traitee')
      this.router.navigateByUrl('/approved');

  }

  async handleClickRow(demande: Demande) {
    console.log("click" + demande);

    if (this.selectedDemande === demande) {
      // Si la demande sélectionnée est déjà celle qui est cliquée, alors on la cache
      this.selectedDemande = null;
      this.displayDetails = false;
    } else {

      //get concern student

      this.currentEtudiant = await this.getConcernEtudiant(demande.id);



      //get infos type of demandes

      this.infosType = await this.getInfosType(demande.type_document, demande.id) ;

      // state of dispaly
      this.selectedDemande = demande;
      this.displayDetails = true;
    }

  }

  private async getInfosType(type: string, id: number) {
    let typeDemandes = type.replace("De", "").replace(/\s/g, "");

    console.log(typeDemandes);

    const infosTypeNoformated = await this.demandesData.getInfosTypeDemande(typeDemandes, id);

    const formattedInfos = infosTypeNoformated.map((item: any) => {

      const formattedItem: any = {};
      // Iterate over the keys of the current object
      Object.keys(item).forEach(key => {
        // Replace underscores with spaces and capitalize words
        const formattedKey = key.replace("_", " de ");
        formattedItem[this.capitalizeWords(formattedKey)] = item[key];
      });

      return formattedItem;
    });

    return formattedInfos;
  }

  private async getConcernEtudiant(id: number) {
    const idEtudiant = this.demandes.find((d: Demande) => d.id === id).etudiant_id;
    console.log(idEtudiant);
    const result: any = await this.demandesData.getEtudiant(idEtudiant);
    console.log(result);
    return result[0];
  }

  private capitalizeWords(input: string): string {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
  }

}
