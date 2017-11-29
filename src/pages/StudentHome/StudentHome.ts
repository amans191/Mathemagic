import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game1Page } from "../game1/game1";

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  constructor(public navCtrl: NavController) {


  }

  game1() {
    this.navCtrl.push(Game1Page);
  }
}