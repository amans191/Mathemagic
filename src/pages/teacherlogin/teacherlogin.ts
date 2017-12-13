import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import {AuthenticationServiceProvider} from "../../providers/authentication-service/authentication-service";

import { TeacherTabsPage } from "../TeacherTabs/TeacherTabs";
import { TeacherregisterPage } from "../teacherregister/teacherregister";

/**
 * Generated class for the TeacherloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherlogin',
  templateUrl: 'teacherlogin.html',
})
export class TeacherloginPage {

  responseData: any;
  teacherData = {"teacherFName":"", "teacherSName":"", "email":"", "school":"", "teacherPassword":""};

  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherloginPage');
  }

  teachertabs() {
    if (this.teacherData.email && this.teacherData.teacherPassword)
    {
      this.authenticationServiceProvider.postData(this.teacherData, "teacherLogin").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.teacherData)
        {
          //to carry cache for local storage
          localStorage.setItem('teacherData', JSON.stringify(this.responseData))
          this.navCtrl.push(TeacherTabsPage);
        }

      }, (err) => {
        console.log("Didn't work fool");
      });
    }
    else
    {
      this.presentToast("Invalid Details, please enter again!");
    }

  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  teacherregister() {
    this.navCtrl.push(TeacherregisterPage);
  }

}
