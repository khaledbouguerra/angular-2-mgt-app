import { Injectable } from '@angular/core';
import {PROD_DATA} from '../../+mock-data/produit-data';
import {Produit} from '../../+data/Produit';
import {Observable} from "rxjs";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



@Injectable()
export class ProduitService {
data=PROD_DATA;
NEW_ID=16;
 
  constructor() { 
  
  }
 getProducts():Promise<any>{
  
  return Promise.resolve(this.data);
}

getProduitByID(id):Promise<any>{
  return Promise.resolve(this.data)
  .then(produit=>produit.filter(produit=>produit.id==id)[0])
}


AddProduct(produit:Produit):Promise<any>{
   let date=new Date();
   let day=date.getDate();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
  if(!produit.id){
    produit.id=this.NEW_ID++;
  }
 
  if(!produit.creationDate){
   produit.creationDate=day+'/'+month+'/'+year;
   
   return Promise.resolve(this.data)
   .then(data=>data.push(produit))
   
  }
}
 removeProduit(produit:Produit):Promise<any>{
   
    let index =this.data.indexOf(produit);
    return Promise.resolve(this.data)
   .then(function(data){
    data.splice(index,1);
})
   
 }



 
}




