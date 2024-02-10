import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireTerrainSportComponent } from './formulaire-terrain-sport.component';

describe('FormulaireTerrainSportComponent', () => {
  let component: FormulaireTerrainSportComponent;
  let fixture: ComponentFixture<FormulaireTerrainSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireTerrainSportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireTerrainSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
