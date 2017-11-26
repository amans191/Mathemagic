import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StudentLoginPage } from "../StudentLogin/StudentLogin";
import { ParentloginPage } from "../parentlogin/parentlogin";
import { TeacherloginPage } from "../teacherlogin/teacherlogin";

/**
 * Generated class for the StartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
  }

  login() {
    this.navCtrl.push(StudentLoginPage);
  }

  parentlogin() {
    this.navCtrl.push(ParentloginPage);
  }

  teacherlogin() {
    this.navCtrl.push(TeacherloginPage);
  }

}
