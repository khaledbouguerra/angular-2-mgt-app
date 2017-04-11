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
@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {
products:Array<Produit>=[];
searchForm: FormGroup;
selectedOption: string;




  constructor(
    private produitService:ProduitService,
    private router:Router,
    private formBuilder:FormBuilder,
    private title:Title,
    public dialog:MdDialog
  ) { }

  ngOnInit() {
    this.title.setTitle('Search for Products');
    this.searchForm = this.formBuilder.group({
      search: ['']
    });
    this.produitService.getProducts()
    .then(products=>{
      console.log(products);
    this.products=products;
  })
}
openDialog(e) {
  e.preventDefault();
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
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
  <div style="width:400px; height:200px">
  <p>{{ title }}</p>
        <p>{{ message }}</p>
       <img md-card-sm-image src="../../../assets/imgs/products.png">
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
export class DialogResultExampleDialog {
  title:string='';
  message:String='this is the message';
   public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
    public lineChartLabels:Array<any> = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';
 
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
   public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    
   }
    public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
