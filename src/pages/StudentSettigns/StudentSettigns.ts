import { Component } from '@angular/core';
import { AlertController, App, Events, IonicPage, NavController} from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import { Storage } from "@ionic/storage";

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

  fontSize: any;

  constructor(public navCtrl: NavController, public app: App, private settings: SettingsProvider,
              public storage: Storage, public events: Events, public alertCtrl: AlertController) {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  green() {
    this.settings.setActiveTheme('green-theme');
  }
  yellow() {
    this.settings.setActiveTheme('yellow-theme');
  }
  white() {
    this.settings.setActiveTheme('light-theme');
  }
  black() {
    this.settings.setActiveTheme('dark-theme');
  }
  pink() {
    this.settings.setActiveTheme('pink-theme');
  }
  orange() {
    this.settings.setActiveTheme('orange-theme');
  }
  purple() {
    this.settings.setActiveTheme('purple-theme');
  }
  red() {
    this.settings.setActiveTheme('red-theme');
  }

  changeSize() {
    this.events.publish('size', this.fontSize);
    this.storage.set('size', this.fontSize).then(() => {
    });
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Settings Page!',
      subTitle: '<p>Welcome to the Settings Page!</p>' +
      '<p>Here you can choose differnt background colour and choose a font size of your choice.</p>' +
      '<p>Do not forget to log out</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  start() {
    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
