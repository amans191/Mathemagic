import { Component } from '@angular/core';
import { App, Events, IonicPage, NavController } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
<<<<<<< HEAD
import { Storage } from "@ionic/storage";
=======
import {StudentHomePage} from "../StudentHome/StudentHome";
>>>>>>> parent of fe72d34... Server working, yup the Parish

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

<<<<<<< HEAD
  fontSize: any;

  constructor(public navCtrl: NavController, public app: App, private settings: SettingsProvider,
              private storage: Storage, public events: Events) {
    // this.storage.get('size').then((val) => {
    //   this.fontSize = val;
    // });
=======
  constructor(public navCtrl: NavController, public app: App, private settings: SettingsProvider) {
    this.navCtrl.push(StudentHomePage, {
      param1: this.fontSize
    });
>>>>>>> parent of fe72d34... Server working, yup the Parish
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

<<<<<<< HEAD
  // changeSize() {
  //   this.events.publish('size', this.fontSize);
  //   this.storage.set('size', this.fontSize).then(() => {
  //   });
  // }
=======
  // toggleAppTheme() {
  //   if (this.colour == 'light') {
  //     this.settings.setActiveTheme('light-theme');
  //   }
  //   if (this.colour == 'dark') {
  //     this.settings.setActiveTheme('dark-theme');
  //   }
  //   if (this.colour == 'green') {
  //     this.settings.setActiveTheme('green-theme');
  //   }
  //   if (this.colour == 'yellow') {
  //     this.settings.setActiveTheme('yellow-theme');
  //
  //   }
  //
  // }

  small() {
    this.settings.setActiveFont('smallfont-theme');
  }
  medium() {
    this.settings.setActiveFont('medfont-theme');
  }
  big() {
    this.settings.setActiveFont('bigfont-them');
  }

  fontSize: number = 1.5; // default font size in `em`

  fontSizeChange($val: number){
    this.fontSize +=$val;
  }
>>>>>>> parent of fe72d34... Server working, yup the Parish

  start() {
    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
