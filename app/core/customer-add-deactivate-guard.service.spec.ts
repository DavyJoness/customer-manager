import { TestBed, inject } from '@angular/core/testing';

import { CustomerAddDeactivateGuardService } from './customer-add-deactivate-guard.service';

describe('CustomerAddDeactivateGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomerAddDeactivateGuardService]
    });
  });

  it('should be created', inject([CustomerAddDeactivateGuardService], (service: CustomerAddDeactivateGuardService) => {
    expect(service).toBeTruthy();
  }));
});
