import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',

  template: `
    <ion-list>
      <button style="font-size: 30px; background-color: transparent" id="info" (click)="infoToggle()">
        <ion-icon name="md-help">Help</ion-icon>
      </button>
      <button ion-item (click)="close()">GitHub Repo</button>
    </ion-list>
  `
})


export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    //this.navCtrl.dismiss();
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      subTitle: '<p><h3>Welcome to the Mathemagic!</h3></p>' +
      '<p>The Home page will show your child\'s performance in their previous daily quizzes!</p>' +
      '<p>The Video page will show a list of videos the teacher has linked for you and your child to watch for ' +
      'extra help!</p>',
      buttons: ['Close']
    });
    alert.present();
  }

}
