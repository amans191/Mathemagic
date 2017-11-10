import { Component } from '@angular/core';
import {App, IonicPage, NavController, NavParams} from 'ionic-angular';

import { StartPage } from "../start/start";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  start() {

    //to ger rid of the tabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}