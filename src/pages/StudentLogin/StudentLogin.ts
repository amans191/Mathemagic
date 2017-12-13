import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

import { StudentTabsPage } from "../StudentTabs/StudentTabs";
import {AuthenticationServiceProvider} from "../../providers/authentication-service/authentication-service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-StudentLogin',
  templateUrl: 'StudentLogin.html',
})
export class StudentLoginPage {

  responseData: any;
  studentData = {"username":"", "studentFName":"", "studentSName":"", "studentPassword":""};
  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  StudentTabs() {
    if (this.studentData.username && this.studentData.studentPassword)
    {
      this.authenticationServiceProvider.postData(this.studentData, "studentLogin").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.studentData)
        {
          //to carry cache for local storage
          localStorage.setItem('studentData', JSON.stringify(this.responseData))
          this.navCtrl.push(StudentTabsPage);
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

}
