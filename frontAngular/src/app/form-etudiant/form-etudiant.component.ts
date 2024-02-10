import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../document.service'; // Assurez-vous d'ajuster le chemin
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss'],
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
export class FormEtudiantComponent implements OnInit {

  documentForm: FormGroup;
  etudiantId: string | null;

  niveaux = ['API1', 'API2', 'CI1', 'CI2', 'CI3'];
  filieres = ['rien', 'IAGI', 'GE', 'GM', 'GI'];
  typesDocuments = ['Releve De Notes', 'Attestation De Bourse', 'Certificat De Scolarite', 'Convention De Stage','Terrain De Sport'];

  constructor(private fb: FormBuilder, private documentService: DocumentService) { }

  ngOnInit(): void {
    this.initForm();
    this.etudiantId = sessionStorage.getItem('userId');
    console.log('etudisantt ID:', this.etudiantId);

  }

  initForm(): void {
    this.documentForm = this.fb.group({
      niveau: ['', Validators.required],
      filiere: ['', Validators.required],
      type_document: ['', Validators.required],
      description: ['', Validators.required],
      annee: [''],
      lieu_de_naissance: [''],
      type_bourse: [''],
      date:['']
    });
  }

  getSelectedDocumentType(): string | null {
    const typeDocumentControl = this.documentForm.get('type_document');
    return typeDocumentControl?.value || null;
  }

  onSubmit(): void {
    if (this.documentForm.valid) {
      const formData = this.documentForm.value;

      // Retrieve etudiant_id from localStorage
    const etudiantId = sessionStorage.getItem('userId');

    // Include etudiant_id in the form data
    formData.etudiant_id = etudiantId;
      this.documentService.saveDocument(formData).subscribe(
        (response) => {
          // Handle successful response
          console.log('Enregistrement réussi :', response);
          console.log(formData);

          // Reset the form after submission
          this.documentForm.reset();
        },
        (error) => {
          // Handle errors
          console.error('Erreur lors de l\'enregistrement :', error);
        }
      );
    }
  }
}
