import { Component } from '@angular/core';
import{Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private router:Router){}
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
