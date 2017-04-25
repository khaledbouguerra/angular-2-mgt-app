import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import {MdDialog, MdDialogRef} from '@angular/material';
import {Produit} from '../../+data/produit';
import {ProduitService} from '../../+services/produit-services/produit.service';
import {ProductSharedDataService} from '../../+services/shared_data/product-shared-data.service';
import {MdToolBarColorService} from '../../+services/mdToolBarColor/md-tool-bar-color.service';
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
products:any;
searchForm: FormGroup;
selectedOption: string;
color:string='warn';
  //products: Observable<Produit[]>;



  constructor(
    private produitService:ProduitService,
    private router:Router,
    private formBuilder:FormBuilder,
    private title:Title,
    public dialog:MdDialog,
    private productSharedDataService:ProductSharedDataService,
    private mdToolBarColorService:MdToolBarColorService
  ) { }

  ngOnInit() {
    this.title.setTitle('Produits');
    this.mdToolBarColorService.setColor(this.color);
    console.log('this is the new color in the products list compoent', this.mdToolBarColorService._color)
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    this.produitService.getProducts()
    .then(products=>{
      console.log(products);
    this.products=products;
  })
this.searchForm.controls['search'].valueChanges.map(value=>console.log('this is the typed value', value));
  this.searchForm.controls['search'].valueChanges
  .map(value=>value)
  .subscribe(value=>this.produitService.getProducts()
  .then(product=>{
   this.products= product.filter(product=>product.name.indexOf(value.toLowerCase())>-1)
    
    console.log('this is the fuckin value', value);
    console.log('this is the fuckin result', this.products);
  }));
 
  
  
}

 private search(produit: Produit[], value: string) {
    return produit.filter(p => value ? p.name.toLowerCase().includes(value.toLowerCase()) : produit);
  }

openDialog(e,product) {
  e.preventDefault();
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    this.productSharedDataService.product=product;
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      
    });
  }
   goToAdd(){
   console.log('adding a new product');
   this.router.navigate(['ajouter-produit']);
  }
 


}
@Component({
  selector: 'dialog-result-example-dialog',
  template: 
   `<md-tab-group>
  <md-tab label="Produit">
  <div style="width:400px; height:250px">
  <p>Nom: {{ product.name }}</p>
  <p>Hauteur: {{product.height}} CM</p>
    <p>Poids: {{product.weight}} KG</p>
        <p> Description: {{ product.description }}</p>
       <img md-card-md-image [src]="product.img" style="margin-left:30%">
       </div>
  </md-tab>
  <md-tab label="Statistiques">
   


<div style="width:400px; height:200px">
  
 
    <canvas baseChart
                [data]="lineChartData"
                [labels]="lineChartLabels"
                [options]="lineChartOptions"
                [chartType]="lineChartType"
                (chartHover)="chartHovered($event)"
                (chartClick)="chartClicked($event)"></canvas>
                </div>

  <button (click)="randomizeType()" style="display: inline-block">update</button>




   
  </md-tab>
</md-tab-group>

        
       <br>
       <br>
        <button type="button" md-raised-button 
            (click)="dialogRef.close(true)">OK</button>
        <button type="button" md-raised-button
            (click)="dialogRef.close()">Cancel</button>
    `,
})
export class DialogResultExampleDialog implements OnInit {
  title:string='';
  message:String='this is the message';
  product:Produit;
   public lineChartData:Array<any> = [
   [65, 59, 80, 81, 56, 55, 40] ,
    [28, 48, 40, 19, 86, 27, 90]
  ];
    public lineChartLabels:Array<any> = ['Janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>,private productSharedDataService:ProductSharedDataService) {}
   public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    
   }
    public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  ngOnInit() {
    this.product=this.productSharedDataService.product
  }
}
