import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireConventionStageComponent } from './formulaire-convention-stage.component';

describe('FormulaireConventionStageComponent', () => {
  let component: FormulaireConventionStageComponent;
  let fixture: ComponentFixture<FormulaireConventionStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireConventionStageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireConventionStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
