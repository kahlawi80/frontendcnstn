import { TestBed } from '@angular/core/testing';

import { ServiceDemandematService } from './service-demandemat.service';

describe('ServiceDemandematService', () => {
  let service: ServiceDemandematService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDemandematService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
