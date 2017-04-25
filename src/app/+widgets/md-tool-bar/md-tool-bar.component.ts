import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MdToolBarColorService} from '../../+services/mdToolBarColor/md-tool-bar-color.service'

@Component({
  selector: 'app-md-tool-bar',
  templateUrl: './md-tool-bar.component.html',
  styleUrls: ['./md-tool-bar.component.css']
})
export class MdToolBarComponent implements OnInit {
color:string;
  constructor(private router:Router,
  private mdToolBarColorService:MdToolBarColorService) { }

  ngOnInit() {
    this.color=this.mdToolBarColorService.getColor();
    console.log('this is the new color', this.color);
  }
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

}
