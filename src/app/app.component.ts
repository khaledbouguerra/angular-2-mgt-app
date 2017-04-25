import { Component,OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {MdToolBarColorService} from './+services/mdToolBarColor/md-tool-bar-color.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 color:string='primary';
  constructor(private router:Router,
  private mdToolBarColorService:MdToolBarColorService
  ){}
  goHome(){
  this.router.navigate(['home']);
}
goToProducts(){
  this.router.navigate(['produits']);
}
goToEmployees(){
  this.router.navigate(['employees']);
}
goToAbout(){
  this.router.navigate(['about']);
}
ngOnInit(){
  this.mdToolBarColorService.setColor(this.color);
 
 
}

}
