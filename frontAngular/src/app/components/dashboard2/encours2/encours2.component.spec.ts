import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encours2Component } from './encours2.component';

describe('Encours2Component', () => {
  let component: Encours2Component;
  let fixture: ComponentFixture<Encours2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Encours2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Encours2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
