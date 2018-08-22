import { TestBed, inject } from '@angular/core/testing';

import { ComicsDataService } from './comics-data.service';

describe('ComicsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicsDataService]
    });
  });

  it('should be created', inject([ComicsDataService], (service: ComicsDataService) => {
    expect(service).toBeTruthy();
  }));
});
