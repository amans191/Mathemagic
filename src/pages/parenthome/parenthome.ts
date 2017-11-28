import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParenthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parenthome',
  templateUrl: 'parenthome.html',
})
export class ParenthomePage {

  public ParentDetails : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const data = JSON.parse(localStorage.getItem('parentData'));
    this.ParentDetails = data.parentData;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParenthomePage');
  }

}
