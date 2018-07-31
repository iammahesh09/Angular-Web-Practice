import { TestBed, inject } from '@angular/core/testing';

import { productService } from './product.service';

describe('productService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [productService]
    });
  });

  it('should be created', inject([productService], (service: productService) => {
    expect(service).toBeTruthy();
  }));
});
