import { TestBed, inject } from '@angular/core/testing';

import { GssPersonService } from './person.service';

describe('GssPersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GssPersonService]
    });
  });

  it('should be created', inject([GssPersonService], (service: GssPersonService) => {
    expect(service).toBeTruthy();
  }));
});
