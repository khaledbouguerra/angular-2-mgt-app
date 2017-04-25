import { Injectable } from '@angular/core';

@Injectable()
export class MdToolBarColorService {
 _color:string;
  constructor() { 
    console.log('this is the new color', this._color);
  }
setColor(color){
  this._color=color;
}
getColor(){
  return this._color;
}
}
