import { TestBed, inject } from '@angular/core/testing';

import { ContractResolverService } from './contract-resolver.service';

describe('ContractResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractResolverService]
    });
  });

  it('should be created', inject([ContractResolverService], (service: ContractResolverService) => {
    expect(service).toBeTruthy();
  }));
});
