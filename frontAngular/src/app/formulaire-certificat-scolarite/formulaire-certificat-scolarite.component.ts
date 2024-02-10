import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-certificat-scolarite',
  templateUrl: './formulaire-certificat-scolarite.component.html',
  styleUrl: './formulaire-certificat-scolarite.component.css'
})
export class FormulaireCertificatScolariteComponent {
  @Input() certificatScolariteForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.certificatScolariteForm) {
      this.certificatScolariteForm.addControl('date', this.fb.control('', Validators.required));
      this.certificatScolariteForm.addControl('lieu_de_naissance', this.fb.control('', Validators.required));
    }
  }

}
