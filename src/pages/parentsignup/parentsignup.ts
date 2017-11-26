import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentsignupPage');
  }

  parentsignup() {
    this.authenticationServiceProvider.postData(this.parentData, "parentSignup").then((result) => {
      this.responseData = result;
      console.log(this.responseData);

      //to carry cache for local storage
      localStorage.setItem('parentData', JSON.stringify(this.responseData))
      this.navCtrl.push(ParentTabsPage);
    }, (err) => {
      console.log("Didn't work fool");
    });
  }

  login() {
    this.navCtrl.push(ParentloginPage);
  }

}
