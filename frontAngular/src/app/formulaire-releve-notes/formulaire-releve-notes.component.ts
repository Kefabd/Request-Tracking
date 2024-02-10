import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-releve-notes',
  templateUrl: './formulaire-releve-notes.component.html',
  styleUrl: './formulaire-releve-notes.component.css'
})
export class FormulaireReleveNotesComponent {
  @Input() releveNotesForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.releveNotesForm) {
      this.releveNotesForm.addControl('niveau', this.fb.control('', Validators.required));
      this.releveNotesForm.addControl('annee', this.fb.control('', Validators.required));
      this.releveNotesForm.addControl('session', this.fb.control('', Validators.required));
    }
  }

}
