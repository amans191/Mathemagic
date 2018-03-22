import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { GamePage } from "../game/game";
import { Storage  } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

import {AuthenticationServiceProvider} from "../../providers/authentication-service/authentication-service";

@Component({
  selector: 'page-home',
  templateUrl: 'StudentHome.html'
})
export class StudentHomePage {

  responseData: any;
  studentData: any;
  quizData = {"quiz_id":"", "teacher_email":"", "quizDateTime":"", "ques1":"", "ques2":"", "ques3":"", "ques4":"",
    "ques5":"", "ans1":"", "ans2":"", "ans3":"", "ans4":"", "ans5":""};
  scoreData = {"student_username":"", "quiz_id":"", "ques1":"", "ques2":"", "ques3":"", "ques4":"", "ques5":"",
    "ans1":"", "ans2":"", "ans3":"", "ans4":"", "ans5":"","obtainedMarks":"","totalMarks":""};

  fontSize: any;

  constructor(public navCtrl: NavController, private storage: Storage, public events: Events,
              public alertCtrl: AlertController, public authenticationServiceProvider: AuthenticationServiceProvider) {
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

  game() {
    this.navCtrl.push(GamePage);
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Home Page!',
      subTitle: '<p>Welcome to the Home Page!</p>' +
                '<p>Choose either to play a game or to do The Daily Quiz. Remember you can only do one quiz a day.</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  private generate  : boolean = false;
  private obtainedMarks  : number = 0;
  private totalMarks  : number = 5;

  quiz(){
    this.generate = true;
    var btnMonkey = document.getElementById('btnMonkey');
    btnMonkey.hidden = true;

    var btnQuiz = document.getElementById('btnQuiz');
    btnQuiz.hidden = true;

    var today = new Date().toISOString().substr(0,10);
    this.quizData.quizDateTime = today;
    this.authenticationServiceProvider.postData(this.quizData, "showQuizDetails").then((result) => {
      this.responseData = result;
      console.log(this.responseData);

      if (this.responseData)
      {
        this.quizData = this.responseData;
        var quizDetails = document.getElementById('quizDetails');
        var btnSubmit = document.getElementById('btnSubmit');
        if(this.quizData.quiz_id == null || this.quizData.quiz_id == "")
        {
          alert("No quiz for today!");
          quizDetails.hidden = true;
          btnSubmit.hidden = true;

          this.generate = false;
          var btnMonkey = document.getElementById('btnMonkey');
          btnMonkey.hidden = false;

          var btnQuiz = document.getElementById('btnQuiz');
          btnQuiz.hidden = false;
        }
        else{
          alert('Get Ready!!');
          quizDetails.hidden = false;
          btnSubmit.hidden = false;
        }
      }

    }, (err) => {
//console.warn(err.responseText);
      console.log("Didn't work man!");
    });

  }

  submitQuiz(){
    this.scoreData.quiz_id = this.quizData.quiz_id;

    this.scoreData.ques1 = this.quizData.ques1;
    this.scoreData.ques2 = this.quizData.ques2;
    this.scoreData.ques3 = this.quizData.ques3;
    this.scoreData.ques4 = this.quizData.ques4;
    this.scoreData.ques5 = this.quizData.ques5;

    this.scoreData.student_username = this.studentData.username;
    console.log(this.studentData.username);
    if (this.scoreData.ans1 && this.scoreData.ans2 && this.scoreData.ans3 &&
      this.scoreData.ans4 && this.scoreData.ans5)
    {

      //checking the obtained marks for student
      if(this.scoreData.ans1 == this.quizData.ans1)
      {
        this.obtainedMarks+=1;
      }
      if(this.scoreData.ans2 == this.quizData.ans2)
      {
        this.obtainedMarks+=1;
      }
      if(this.scoreData.ans3 == this.quizData.ans3)
      {
        this.obtainedMarks+=1;
      }
      if(this.scoreData.ans4 == this.quizData.ans4)
      {
        this.obtainedMarks+=1;
      }
      if(this.scoreData.ans5 == this.quizData.ans5)
      {
        this.obtainedMarks+=1;
      }

      //saving obtained and total quiz marks in db
      this.scoreData.obtainedMarks = this.obtainedMarks.toString();
      this.scoreData.totalMarks = this.totalMarks.toString();

      //send info to the db
      this.authenticationServiceProvider.postData(this.scoreData, "submitQuizAnswer").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData)
        {
          alert(this.responseData.success.text);

          this.generate = false;
          var btnMonkey = document.getElementById('btnMonkey');
          btnMonkey.hidden = false;

          var btnQuiz = document.getElementById('btnQuiz');
          btnQuiz.hidden = false;

          var quizDetails = document.getElementById('quizDetails');
          var btnSubmit = document.getElementById('btnSubmit');

          quizDetails.hidden = true;
          btnSubmit.hidden = true;
        }

      }, (err) => {
        console.log("Didn't work man!");
      });
    }
    else
    {
      alert("Incomplete Details, please enter again!");
    }
  }
}
