import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Approved2Component } from './approved2.component';

describe('Approved2Component', () => {
  let component: Approved2Component;
  let fixture: ComponentFixture<Approved2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Approved2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Approved2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
