import { TestBed, inject } from '@angular/core/testing';
import {Produit} from '../../+data/produit';

import { ProductSharedDataService } from './product-shared-data.service';

describe('ProductSharedDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSharedDataService]
    });
  });

  it('should change product  property', inject([ProductSharedDataService], (service: ProductSharedDataService) => {
  let produit:Produit=new Produit();
  produit.id=150;
  produit.name='produit_1';
  produit.description='description_1';
  produit.height=120;
  produit.weight=50;
  service.product=produit;
  expect(service.product).toBe(produit);
  }));
});
