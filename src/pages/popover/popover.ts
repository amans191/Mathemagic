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
        <ion-icon name="information-circle"></ion-icon>
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
      title: 'Home Page!',
      subTitle: '<p>Welcome to the Home Page!</p>' +
      '<p>Choose Either to play a game or to do The Daily Quiz</p>',
      buttons: ['OK']
    });
    alert.present();
  }

}
