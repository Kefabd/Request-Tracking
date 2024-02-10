import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Total2Component } from './total2.component';

describe('Total2Component', () => {
  let component: Total2Component;
  let fixture: ComponentFixture<Total2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Total2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Total2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
