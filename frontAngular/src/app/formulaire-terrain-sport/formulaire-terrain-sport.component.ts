import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-terrain-sport',
  templateUrl: './formulaire-terrain-sport.component.html',
  styleUrl: './formulaire-terrain-sport.component.css'
})
export class FormulaireTerrainSportComponent {
  @Input() terrainSportForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    if (this.terrainSportForm) {
      this.terrainSportForm.addControl('date', this.fb.control('', Validators.required));
      this.terrainSportForm.addControl('heure_debut', this.fb.control('', Validators.required));
      this.terrainSportForm.addControl('heure_fin', this.fb.control('', Validators.required));
    }
  }

}

