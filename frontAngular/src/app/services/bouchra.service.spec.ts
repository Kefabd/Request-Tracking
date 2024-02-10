import { TestBed } from '@angular/core/testing';

import { BouchraService } from './bouchra.service';

describe('BouchraService', () => {
  let service: BouchraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouchraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
