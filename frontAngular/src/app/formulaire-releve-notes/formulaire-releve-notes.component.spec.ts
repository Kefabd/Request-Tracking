import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReleveNotesComponent } from './formulaire-releve-notes.component';

describe('FormulaireReleveNotesComponent', () => {
  let component: FormulaireReleveNotesComponent;
  let fixture: ComponentFixture<FormulaireReleveNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireReleveNotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireReleveNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
