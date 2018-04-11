import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, ToastController} from 'ionic-angular';
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
  responseData: any;
  studentData = {"username":"", "studentFName":"", "studentSName":"", "studentPassword":"", "teacherEmail":""};

  public TeacherDetails: any;

  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController, public alertCtrl: AlertController) {

    const data = JSON.parse(localStorage.getItem('teacherData'));
    this.TeacherDetails = data.teacherData;
    console.log(this.TeacherDetails);
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Manage Page!',
      subTitle: '<p>Welcome to the Manage Page!</p>' +
      '<p>Here you can add students.</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachermanagePage');
  }

  registerstudent() {
    if (this.studentData.username && this.studentData.studentFName && this.studentData.studentSName &&
      this.studentData.studentPassword)
    {
      this.studentData.teacherEmail = this.TeacherDetails.email;
      this.authenticationServiceProvider.postData(this.studentData, "teacherManage").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData.studentData)
        {
          //to carry cache for local storage
          localStorage.setItem('studentData', JSON.stringify(this.responseData))
          this.presentToast("Student added!");
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
