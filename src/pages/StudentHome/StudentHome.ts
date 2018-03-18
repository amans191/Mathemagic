import { Component } from '@angular/core';
import {Events, NavController} from 'ionic-angular';
import { GamePage } from "../game/game";
import { Storage  } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  fontSize: any;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events,
              public alertCtrl: AlertController) {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });
    events.subscribe('size', (size) => {
      this.fontSize = size;
    });
  }

  ngOnInit() {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });
  }

  game() {
    this.navCtrl.push(GamePage);
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
