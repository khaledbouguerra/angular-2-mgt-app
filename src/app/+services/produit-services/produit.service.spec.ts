import { TestBed, inject } from '@angular/core/testing';
import {Produit} from '../../+data/produit';
import { ProduitService } from './produit.service';

describe('ProduitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduitService]
    });
  });

  it('should return a list of products', inject([ProduitService], (service: ProduitService) => {
    service.getProducts()
    .then(products=>{
      expect(products.length).toBeDefined();
      expect(products.length).toBeGreaterThan(0);
    })
  }));
  it('should resturn a product by a given ID', inject([ProduitService],(service:ProduitService) =>{
    let productTestingfunction=(produit:Produit)=>{
    expect(produit).toBeDefined();
    expect(produit.name).toBe('produit 3')
    }
    let ID=3;
    service.getProduitByID(ID)
    .then(product=>{
      productTestingfunction(product);
    })
  }));
  it('shoud add a new product',inject([ProduitService],(service:ProduitService)=>{
    let newProduct:Produit= new Produit();
    newProduct.id=20;
    newProduct.name='testingProduct';
    newProduct.description='testing description';
    newProduct.height=100;
    newProduct.weight=50;
   
    let testingNewProductFuntion=(product:Produit)=>{
      expect(product).toBeDefined();
      expect(product.id).toBe(20);
      expect(product.name).toBe('testingProduct');
      expect(product.height).toBe(100);
      expect(product.weight).toBe(50);
      expect(product.description).toBe('testing description');
    }
   service.AddProduct(newProduct)
.then(()=>
  service.getProduitByID(20)
  .then(testingNewProductFuntion)
  
)
  }));
  it('should remove one product',inject([ProduitService],(service:ProduitService)=>{
    let length;
  let newProduct:Produit= new Produit();
    newProduct.id=20;
    newProduct.name='testingProduct';
    newProduct.description='testing description';
    newProduct.height=100;
    newProduct.weight=50;
   
    let testingRemoveProduct=(products:Array<Produit>,newLength)=>{
     expect(products.length).toBe(newLength);
       }
     service.getProducts()
     .then((products)=>{
       length=products.length;
      service.AddProduct(newProduct)
    .then(()=>service.removeProduit(newProduct)
    .then(service.getProducts)
    .then(products=>{
      let len=products.length;
      testingRemoveProduct(products,len);
    })
    )
  })
  
  }))
});
