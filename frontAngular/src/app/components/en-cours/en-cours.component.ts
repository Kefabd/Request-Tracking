import { Component } from '@angular/core';
import { DemandesData } from '../../services/dashboard/demande-data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';


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
  selector: 'app-en-cours',
  templateUrl: './en-cours.component.html',
  styleUrl: './en-cours.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})


export class EnCoursComponent {

  openDetails: boolean = true;
  pendingData: any = [];
  selectedDemande: Demande | null;
  displayDetails: boolean = false;
  currentEtudiant: any = [];
  infosType: any = [];
  role : string |null;



  constructor(private demandesPending: DemandesData, private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getPendingdemandes();
    this.role = sessionStorage.getItem('role');

  }

  getPendingdemandes() {
    this.demandesPending.getFiltredData("En Cours").subscribe(res => this.pendingData = res)
  }

  validerDemande(demande: any): void {
    console.log('Fonction validerDemande appelée', demande);



    // Faites appel à votre API pour mettre à jour la base de données
      this.demandesPending.validerDemande(demande.id).subscribe(
        response => {
        this.router.navigateByUrl('/dashboard');
        console.log('État de la demande mis à jour dans la base de données', response);
      }, error => {
        console.error('Erreur lors de la mise à jour de l\'état de la demande', error);
        // Si la mise à jour échoue, vous voudrez probablement annuler la modification côté client
        demande.etat = 'En Cours';
      }
      
    );

    

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

      this.infosType = await this.getInfosType(demande.type_document, demande.id);

      // state of dispaly
      this.selectedDemande = demande;
      this.displayDetails = true;
    }

  }

  private async getInfosType(type: string, id: number) {
    let typeDemandes = type.replace("De", "").replace(/\s/g, "");

    console.log(typeDemandes);

    const infosTypeNoformated = await this.demandesPending.getInfosTypeDemande(typeDemandes, id);

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
    const idEtudiant = this.pendingData.find((d: Demande) => d.id === id).etudiant_id;
    console.log(idEtudiant);
    const result: any = await this.demandesPending.getEtudiant(idEtudiant);
    console.log(result);
    return result[0];
  }

  private capitalizeWords(input: string): string {
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
  }



}

