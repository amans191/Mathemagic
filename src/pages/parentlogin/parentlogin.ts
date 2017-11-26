import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ParentTabsPage } from "../ParentTabs/ParentTabs";
import { ParentsignupPage } from "../parentsignup/parentsignup";

/**
 * Generated class for the ParentloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentlogin',
  templateUrl: 'parentlogin.html',
})
export class ParentloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentloginPage');
  }

  ParentTabs() {
    this.navCtrl.push(ParentTabsPage);
  }

  parentsignup() {
    this.navCtrl.push(ParentsignupPage);
  }

}
