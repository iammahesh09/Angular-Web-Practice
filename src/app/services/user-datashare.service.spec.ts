import { TestBed, inject } from '@angular/core/testing';

import { UserDatashareService } from './user-datashare.service';

describe('UserDatashareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDatashareService]
    });
  });

  it('should be created', inject([UserDatashareService], (service: UserDatashareService) => {
    expect(service).toBeTruthy();
  }));
});
