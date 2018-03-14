import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GamePage } from "../game/game";
import {FontsettingsProvider} from "../../providers/fontsettings/fontsettings";

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  private fontSize: any;

  constructor(public navCtrl: NavController, private fontsettings: FontsettingsProvider) {
    this.fontSize = fontsettings.getFont();
  }

  game() {
    this.navCtrl.push(GamePage);
  }
}
