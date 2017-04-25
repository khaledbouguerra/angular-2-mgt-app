import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { provideRoutes } from '@angular/router';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './+pages/employees/employees.component';
import {AppRoutingModule} from './app.router-module';
import {EmployeesService} from'./+services/employees.service';
import { AddEmployeeComponent } from './+pages/add-employee/add-employee.component';
import { EditEmployeeComponent } from './+pages/edit-employee/edit-employee.component';
import 'hammerjs';
import { HomePageComponent } from './+pages/home-page/home-page.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import {ProduitService} from './+services/produit-services/produit.service';
import { ProduitListComponent,DialogResultExampleDialog } from './+pages/produit-list/produit-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AddProductComponent } from './+pages/add-product/add-product.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {AboutPageComponent} from'./+pages/about-page/about-page.component';
import{ProductSharedDataService} from './+services/shared_data/product-shared-data.service';
import {MdToolBarColorService} from './+services/mdToolBarColor/md-tool-bar-color.service';
import { MdToolBarComponent } from './+widgets/md-tool-bar/md-tool-bar.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    HomePageComponent,
    ProduitListComponent,
    DialogResultExampleDialog,
    AddProductComponent,
    AboutPageComponent,
    MdToolBarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  entryComponents: [DialogResultExampleDialog],
  providers: [EmployeesService,ProduitService,ProductSharedDataService,MdToolBarColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
