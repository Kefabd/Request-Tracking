import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouvedComponent } from './approuved.component';

describe('ApprouvedComponent', () => {
  let component: ApprouvedComponent;
  let fixture: ComponentFixture<ApprouvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApprouvedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprouvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
