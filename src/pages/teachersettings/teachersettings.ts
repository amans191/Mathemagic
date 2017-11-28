import { Component } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TeachersettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachersettings',
  templateUrl: 'teachersettings.html',
})
export class TeachersettingsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachersettingsPage');
  }

  start() {

    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
