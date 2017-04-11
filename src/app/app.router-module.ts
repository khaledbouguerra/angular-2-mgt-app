import { Component } from '@angular/core';
import {EmployeesComponent} from './+pages/employees/employees.component';
import {EmployeesService} from './+services/employees.service';
import {Employee} from './+data/employee';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddEmployeeComponent} from './+pages/add-employee/add-employee.component';
import {EditEmployeeComponent} from'./+pages/edit-employee/edit-employee.component';
import {HomePageComponent} from './+pages/home-page/home-page.component';
import {ProduitListComponent} from './+pages/produit-list/produit-list.component';
import {AddProductComponent} from './+pages/add-product/add-product.component';
import {AboutPageComponent} from './+pages/about-page/about-page.component';
const routes: Routes = [
     {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
 {path: 'home', component:HomePageComponent },
  {path: 'employees', component:EmployeesComponent },
  {path: 'add', component:AddEmployeeComponent},
  {path:'edit/:id',component:EditEmployeeComponent},
  {path:'produits', component:ProduitListComponent},
  {path:'ajouter-produit', component:AddProductComponent},
  {path:'about',component:AboutPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }