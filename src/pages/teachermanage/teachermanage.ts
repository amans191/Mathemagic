import { Component } from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {AuthenticationServiceProvider} from "../../providers/authentication-service/authentication-service";

/**
 * Generated class for the TeachermanagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachermanage',
  templateUrl: 'teachermanage.html',
})
export class TeachermanagePage {

  public StudentDetails : any;

  responseData: any;
  studentData = {"username":"", "studentFName":"", "studentSName":"", "studentPassword":""};
  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {

    // const data = JSON.parse(localStorage.getItem('studentData'));
    // this.StudentDetails = data.studentData;


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachermanagePage');
  }

  registerstudent() {
    if (this.studentData.username && this.studentData.studentFName && this.studentData.studentSName && this.studentData.studentPassword)
    {
      this.authenticationServiceProvider.postData(this.studentData, "teacherManage").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.studentData)
        {
          //to carry cache for local storage
          localStorage.setItem('studentData', JSON.stringify(this.responseData))
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

  studentdeets() {

  }

  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

}
