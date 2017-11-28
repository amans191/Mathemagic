import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";

import { ParentTabsPage} from "../ParentTabs/ParentTabs";
import { ParentloginPage } from "../parentlogin/parentlogin";


/**
 * Generated class for the ParentsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentsignup',
  templateUrl: 'parentsignup.html',
})
export class ParentsignupPage {

  responseData: any;
  parentData = {"parentFName":"", "parentSName":"", "parentEmail":"", "studentID":"", "studentSName":"", "parentPassword":""};
  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsignupPage');
  }

  parentsignup() {
    if (this.parentData.parentFName && this.parentData.parentSName && this.parentData.parentEmail &&
      this.parentData.studentID && this.parentData.studentSName && this.parentData.parentPassword)
    {
      this.authenticationServiceProvider.postData(this.parentData, "parentSignup").then((result) => {
        this.responseData = result;
        console.log(this.responseData);


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

  login() {
    this.navCtrl.push(ParentloginPage);
  }

}
