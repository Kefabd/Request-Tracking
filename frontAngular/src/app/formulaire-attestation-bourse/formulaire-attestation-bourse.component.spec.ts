import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAttestationBourseComponent } from './formulaire-attestation-bourse.component';

describe('FormulaireAttestationBourseComponent', () => {
  let component: FormulaireAttestationBourseComponent;
  let fixture: ComponentFixture<FormulaireAttestationBourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireAttestationBourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireAttestationBourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
