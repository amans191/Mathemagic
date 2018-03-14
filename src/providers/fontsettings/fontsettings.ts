import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the FontsettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FontsettingsProvider {

  fontSize: number;

  constructor() {
    this.fontSize = 1.5;

  }

  //fontSize: number = 1.5; // default font size in `em`
  setFont(fontSize){
    this.fontSize = fontSize;
  }

  getFont(){
    return this.fontSize;
  }

  // fontSizeChange($val: number){
  //   this.fontSize +=$val;
  // }

}
