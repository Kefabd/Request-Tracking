import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupcomponentComponent } from './signupcomponent.component';

describe('SignupcomponentComponent', () => {
  let component: SignupcomponentComponent;
  let fixture: ComponentFixture<SignupcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupcomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
