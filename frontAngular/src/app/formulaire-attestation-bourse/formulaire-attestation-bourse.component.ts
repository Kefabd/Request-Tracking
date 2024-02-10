import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-attestation-bourse',
  templateUrl: './formulaire-attestation-bourse.component.html',
  styleUrls: ['./formulaire-attestation-bourse.component.scss']
})
export class FormulaireAttestationBourseComponent {
  @Input() documentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.documentForm) {
      this.documentForm.addControl('annee', this.fb.control('', Validators.required));
      this.documentForm.addControl('lieu_de_naissance', this.fb.control('', Validators.required));
      this.documentForm.addControl('type_bourse', this.fb.control('', Validators.required));
    }
  }
}
