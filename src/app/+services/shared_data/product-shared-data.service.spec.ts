import { TestBed, inject } from '@angular/core/testing';

import { ProductSharedDataService } from './product-shared-data.service';

describe('ProductSharedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSharedDataService]
    });
  });

  it('should ...', inject([ProductSharedDataService], (service: ProductSharedDataService) => {
    expect(service).toBeTruthy();
  }));
});
