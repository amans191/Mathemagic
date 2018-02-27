import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { QuizMakerPage } from "../quizmaker/quizmaker";

/**
 * Generated class for the TeacherhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teacherhome',
  templateUrl: 'teacherhome.html',
})
export class TeacherhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherhomePage');
  }

  makequiz() {
    this.navCtrl.push(QuizMakerPage);
  }

}
