import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import { Title } from '@angular/platform-browser';
import {MdToolBarColorService} from '../../+services/mdToolBarColor/md-tool-bar-color.service';

@Component({
  
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
color:string='primary';
  constructor(private router: Router,private title:Title,private mdToolBarColorService:MdToolBarColorService) { }

  ngOnInit() {
    this.title.setTitle('Accueil');
    this.mdToolBarColorService.setColor(this.color);
  }
  gotoEmployeesManagment(e){
    e.preventDefault();
    console.log('going to employees management system');
    this.router.navigate(['employees']);
  }
  gotoProductsList(e){
    e.preventDefault();
    this.router.navigate(['produits']);
    console.log('going to products page');
  }

}
