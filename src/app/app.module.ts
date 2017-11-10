import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SettingsPage } from "../pages/settings/settings";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { TeacherloginPage } from "../pages/teacherlogin/teacherlogin";
import { ParentloginPage } from "../pages/parentlogin/parentlogin";
import { ParentsignupPage } from '../pages/parentsignup/parentsignup';
import { Game1Page } from "../pages/game1/game1";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    StartPage,
    LoginPage,
    TeacherloginPage,
    ParentloginPage,
    ParentsignupPage,
    Game1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    HomePage,
    TabsPage,
    StartPage,
    LoginPage,
    TeacherloginPage,
    ParentloginPage,
    ParentsignupPage,
    Game1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider
  ]
})
export class AppModule {}
