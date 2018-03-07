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
import { GameHomePage } from "../pages/GameHome/GameHome";
import { GamePage } from "../pages/game/game";
import { QuizmakerPage } from "../pages/quizmaker/quizmaker";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { HttpModule } from "@angular/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


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
    TeacherregisterPage,
    GameHomePage,
    GamePage,
    QuizmakerPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
        backButtonText: 'Go Back',
        iconMode: 'ios',
        toastEnter: 'toast-md-slide-in',
        toastLeave: 'toast-md-slide-out',
        tabsPlacement: 'bottom',
        pageTransition: 'ios-transition'
      }
    ),
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
    TeacherregisterPage,
    GameHomePage,
    GamePage,
    QuizmakerPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthenticationServiceProvider
  ]
})
export class AppModule {}
