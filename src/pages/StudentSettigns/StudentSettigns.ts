import { Component } from '@angular/core';
import { App, IonicPage, NavController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-StudentSettigns',
  templateUrl: 'StudentSettigns.html',
})
export class StudentSettignsPage {
  colour: string;

  constructor(public navCtrl: NavController, public app: App, private settings: SettingsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  toggleAppTheme() {
    if (this.colour == 'light') {
      this.settings.setActiveTheme('light-theme');
    }
    if (this.colour == 'dark') {
      this.settings.setActiveTheme('dark-theme');
    }
    if (this.colour == 'green') {
      this.settings.setActiveTheme('green-theme');
    }
    if (this.colour == 'yellow') {
      this.settings.setActiveTheme('yellow-theme');

    }

  }

  start() {
    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
