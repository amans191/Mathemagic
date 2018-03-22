import { Component } from '@angular/core';
import { Events, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-StudentVideos',
  templateUrl: 'StudentVideos.html'
})
export class StudentVideosPage {

  constructor(public navCtrl: NavController, public events: Events, public alertCtrl: AlertController) {

  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Video Page!',
      subTitle: '<p>Welcome to the Videos Page!</p>' +
      '<p>Here you can watch videos on how to solve maths problems.</p>',
      buttons: ['OK']
    });
    alert.present();
  }
}
