import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the ParentsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentsignup',
  templateUrl: 'parentsignup.html',
})
export class ParentsignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsignupPage');
  }

  tabs() {
    this.navCtrl.push(TabsPage);
  }

}
