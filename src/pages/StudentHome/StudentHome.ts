import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from "ionic-angular";

import { GamePage } from "../game/game";

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {
  private fontSize: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.fontSize = navParams.get('param1');
  }

  game() {
    this.navCtrl.push(GamePage);
  }
}
