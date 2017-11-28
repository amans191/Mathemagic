import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";


import { ParentTabsPage } from "../ParentTabs/ParentTabs";
import { ParentsignupPage } from "../parentsignup/parentsignup";

/**
 * Generated class for the ParentloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentlogin',
  templateUrl: 'parentlogin.html',
})
export class ParentloginPage {

  responseData: any;
  parentData = {"parentFName":"", "parentSName":"", "parentEmail":"", "studentID":"", "studentSName":"", "parentPassword":""};

  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentloginPage');
  }

  ParentTabs() {
    if (this.parentData.parentEmail && this.parentData.parentPassword)
    {
      this.authenticationServiceProvider.postData(this.parentData, "parentLogin").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.parentData)
        {
          //to carry cache for local storage
          localStorage.setItem('parentData', JSON.stringify(this.responseData))
          this.navCtrl.push(ParentTabsPage);
        }
        else
        {
          this.presentToast("Invalid Email or password");
        }
      }, (err) => {
        console.log("Didn't work fool");
      });
    }
    else
    {
      this.presentToast("Invalid Email or password");
    }
  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  parentsignup() {
    this.navCtrl.push(ParentsignupPage);
  }

}
