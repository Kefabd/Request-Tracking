import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { BouchraService } from '../../services/bouchra.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  username: string | null = null;
  userprenom: string | null = null;
  etudiantData: any; // Variable pour stocker les données de l'étudiant

  constructor(private bouchraService: BouchraService) {}

  ngOnInit() {
    this.username=sessionStorage.getItem('username');
    this.userprenom=sessionStorage.getItem('userprenom');
    const userId = sessionStorage.getItem('userId');
    console.log("user name in etudiants: "+this.username)
    console.log("userId in etudiants: "+userId)
    if (userId) {
      // Utiliser le service pour récupérer les informations de l'étudiant en fonction de userId
      this.bouchraService.etudiantByUserId(userId).subscribe(
        (data: any) => {
          if (data.status === 200) {
            // Si les données de l'étudiant sont disponibles
            this.etudiantData = data.message;
          } else {
            // Gérer le cas où aucune donnée n'est trouvée
            console.error('Aucune donnée d\'étudiant trouvée.');
          }
        },
        (error: any) => {
          console.error('Une erreur s\'est produite lors de la récupération des données de l\'étudiant.', error);
        }
      );
    } else {
      console.error('UserId introuvable dans le localStorage.');
    }
  }
}
