import { Injectable } from '@angular/core';
import {Produit} from '../../+data/produit'

@Injectable()
export class ProductSharedDataService {
product:Produit;
  constructor() { }

}
