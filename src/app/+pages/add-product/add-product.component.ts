import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Produit} from '../../+data/produit';
import {ProduitService} from '../../+services/produit-services/produit.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
newProduct:Produit;
  constructor(
    private router:Router,
    private produitService:ProduitService,
    private title:Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Ajouter Produit')
    this.newProduct=new Produit;
  }
 saveEmployee(){
   console.log('adding a new product');
   this.produitService.AddProduct(this.newProduct)
   .then(result=>{
     console.log(result);
     this.router.navigate(['produits']);
   })
 }
cancelAdd(){
  console.log('canceling ading a product');
  this.router.navigate(['produits']);
}

}
