import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StudentVideosPage } from '../pages/StudentVideos/StudentVideos';
import { StudentSettignsPage } from "../pages/StudentSettigns/StudentSettigns";
import { StudentHomePage } from '../pages/StudentHome/StudentHome';
import { StudentTabsPage } from '../pages/StudentTabs/StudentTabs';
import { StartPage } from '../pages/start/start';
import { StudentLoginPage } from '../pages/StudentLogin/StudentLogin'
import { TeacherloginPage } from "../pages/teacherlogin/teacherlogin";
import { ParentloginPage } from "../pages/parentlogin/parentlogin";
import { ParentsignupPage } from '../pages/parentsignup/parentsignup';
import { Game1Page } from "../pages/game1/game1";
import { ParentTabsPage } from "../pages/ParentTabs/ParentTabs";
import { StudentprofilePage } from "../pages/studentprofile/studentprofile";
import { ParenthomePage } from "../pages/parenthome/parenthome";
import { ParentvideosPage } from "../pages/parentvideos/parentvideos";
import { ParentsettingsPage } from "../pages/parentsettings/parentsettings";
import { TeacherTabsPage } from "../pages/TeacherTabs/TeacherTabs";
import { TeacherhomePage } from "../pages/teacherhome/teacherhome";
import { TeachervideosPage } from "../pages/teachervideos/teachervideos";
import { TeachermanagePage } from "../pages/teachermanage/teachermanage";
import { TeachersettingsPage } from "../pages/teachersettings/teachersettings";
import { TeacherregisterPage } from "../pages/teacherregister/teacherregister";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    StudentVideosPage,
    StudentSettignsPage,
    StudentHomePage,
    StudentTabsPage,
    StartPage,
    StudentLoginPage,
    TeacherloginPage,
    ParentloginPage,
    ParentsignupPage,
    Game1Page,
    ParentTabsPage,
    StudentprofilePage,
    ParenthomePage,
    ParentvideosPage,
    ParentsettingsPage,
    TeacherTabsPage,
    TeacherhomePage,
    TeachervideosPage,
    TeachermanagePage,
    TeachersettingsPage,
    TeacherregisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StudentVideosPage,
    StudentSettignsPage,
    StudentHomePage,
    StudentTabsPage,
    StartPage,
    StudentLoginPage,
    TeacherloginPage,
    ParentloginPage,
    ParentsignupPage,
    Game1Page,
    ParentTabsPage,
    StudentprofilePage,
    ParenthomePage,
    ParentvideosPage,
    ParentsettingsPage,
    TeacherTabsPage,
    TeacherhomePage,
    TeachervideosPage,
    TeachermanagePage,
    TeachersettingsPage,
    TeacherregisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider
  ]
})
export class AppModule {}
