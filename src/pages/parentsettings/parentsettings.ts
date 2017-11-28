import { Component } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ParentsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentsettings',
  templateUrl: 'parentsettings.html',
})
export class ParentsettingsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsettingsPage');
  }

  start() {

    //clear local storage

    localStorage.clear();
    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }

}
