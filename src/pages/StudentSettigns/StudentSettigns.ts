import { Component } from '@angular/core';
import {App, IonicPage, NavController} from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';
import {StudentHomePage} from "../StudentHome/StudentHome";

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

  constructor(public navCtrl: NavController, public app: App, private settings: SettingsProvider) {
    this.navCtrl.push(StudentHomePage, {
      param1: this.fontSize
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

  start() {
    //to ger rid of the StudentTabs when you logout on the start page
    const root = this.app.getRootNav();
    root.popToRoot();
  }
}
