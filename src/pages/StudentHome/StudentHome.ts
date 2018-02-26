import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GameHomePage } from "../GameHome/GameHome";

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  constructor(public navCtrl: NavController) {


  }

  game() {
    this.navCtrl.push(GameHomePage);
  }
}
