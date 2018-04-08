import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage  } from '@ionic/storage';


/**
 * Generated class for the StudentprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentprofile',
  templateUrl: 'studentprofile.html',
})
export class StudentprofilePage {

  fontSize: any;

  studentData : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public events: Events) {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });

    events.subscribe('size', (size) => {
      this.fontSize = size;
    });

    var data = JSON.parse(localStorage.getItem('studentData'));
    this.studentData = data.studentData;
  }

  ngOnInit() {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });
  }

  ionViewDidLoad() {
    var trophy1 = document.getElementById('tr1');
    var trophyNotWon1 = document.getElementById('trNW1');

    var trophy2 = document.getElementById('tr2');
    var trophyNotWon2 = document.getElementById('trNW2');

    var trophy3 = document.getElementById('tr3');
    var trophyNotWon3 = document.getElementById('trNW3');

    var trophy4 = document.getElementById('tr4');
    var trophyNotWon4 = document.getElementById('trNW4');

    var trophy5 = document.getElementById('tr5');
    var trophyNotWon5 = document.getElementById('trNW5');

    var wonAllTrophies = document.getElementById('wonAll');
    var wonNoTrophy = document.getElementById('wonNone');

    console.log('ionViewDidLoad StudentprofilePage');
    if(this.studentData.correctAnswers != null && this.studentData.correctAnswers > 0){
      if(this.studentData.totalAnswered >= 5){
        trophy1.hidden = false;
        trophyNotWon1.hidden = true;
        wonNoTrophy.hidden = true;
      }
      if(this.studentData.correctAnswers >= 10){
        trophy2.hidden = false;
        trophyNotWon2.hidden = true;
      }
      if(this.studentData.totalAnswered >= 15){
        trophy3.hidden = false;
        trophyNotWon3.hidden = true;
      }
      if(this.studentData.totalAnswered >= 40){
        trophy4.hidden = false;
        trophyNotWon4.hidden = true;
      }
      if(this.studentData.totalAnswered >= 50){
        trophy5.hidden = false;
        trophyNotWon5.hidden = true;
      }
      if(trophyNotWon1.hidden && trophyNotWon2.hidden && trophyNotWon3.hidden && trophyNotWon4.hidden && trophyNotWon5.hidden)
      {
        wonAllTrophies.hidden = false;
      }
    }
  }

}
