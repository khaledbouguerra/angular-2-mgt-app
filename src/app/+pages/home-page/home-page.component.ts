import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
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
