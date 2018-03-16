import { Component } from '@angular/core';
import {Events, NavController} from 'ionic-angular';

import { GamePage } from "../game/game";
import { Storage  } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  fontSize: any;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events) {
    // this.storage.get('size').then((val) => {
    //   this.fontSize = val;
    // });
    // events.subscribe('size', (size) => {
    //   this.fontSize = size;
    // });
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
