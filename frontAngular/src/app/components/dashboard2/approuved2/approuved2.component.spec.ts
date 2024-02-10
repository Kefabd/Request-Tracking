import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Approuved2Component } from './approuved2.component';

describe('Approuved2Component', () => {
  let component: Approuved2Component;
  let fixture: ComponentFixture<Approuved2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Approuved2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Approuved2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
