import { Component } from '@angular/core';
<<<<<<< HEAD
import {Events, NavController} from 'ionic-angular';

import { GamePage } from "../game/game";
import { Storage  } from '@ionic/storage';
=======
import { NavController } from 'ionic-angular';
import { NavParams } from "ionic-angular";

import { GamePage } from "../game/game";
>>>>>>> parent of fe72d34... Server working, yup the Parish

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {
<<<<<<< HEAD

  fontSize: any;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events) {
    // this.storage.get('size').then((val) => {
    //   this.fontSize = val;
    // });
    // events.subscribe('size', (size) => {
    //   this.fontSize = size;
    // });
=======
  private fontSize: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fontSize = navParams.get('param1');
>>>>>>> parent of fe72d34... Server working, yup the Parish
  }

  // ngOnInit() {
  //   this.storage.get('size').then((val) => {
  //     this.fontSize = val;
  //   });
  // }

  game() {
    this.navCtrl.push(GamePage);
  }
}
