import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-convention-stage',
  templateUrl: './formulaire-convention-stage.component.html',
  styleUrl: './formulaire-convention-stage.component.css'
})
export class FormulaireConventionStageComponent {
  @Input() conventionStageForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.conventionStageForm) {
      this.conventionStageForm.addControl('societe', this.fb.control('', Validators.required));
      this.conventionStageForm.addControl('date_debut', this.fb.control('', Validators.required));
      this.conventionStageForm.addControl('date_fin', this.fb.control('', Validators.required));
    }
  }

}
