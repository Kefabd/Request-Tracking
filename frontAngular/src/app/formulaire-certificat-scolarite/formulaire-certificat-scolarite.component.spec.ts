import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCertificatScolariteComponent } from './formulaire-certificat-scolarite.component';

describe('FormulaireCertificatScolariteComponent', () => {
  let component: FormulaireCertificatScolariteComponent;
  let fixture: ComponentFixture<FormulaireCertificatScolariteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormulaireCertificatScolariteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormulaireCertificatScolariteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
