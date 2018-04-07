import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StartPage } from '../pages/start/start';
import { StudentprofilePage } from '../pages/studentprofile/studentprofile';
import { SettingsProvider } from "../providers/settings/settings";
import { Storage } from "@ionic/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = StartPage;

  selectedTheme: String;

  fontSize = 20;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private settings: SettingsProvider,
    private storage: Storage) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
