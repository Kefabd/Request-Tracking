import { TestBed } from '@angular/core/testing';

import { DemandeDataService } from './demande-data.service';

describe('DemandeDataService', () => {
  let service: DemandeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
