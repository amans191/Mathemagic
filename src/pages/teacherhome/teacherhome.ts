import { Component, ViewChild } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { QuizmakerPage } from "../quizmaker/quizmaker";
import { Chart } from 'chart.js';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";

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
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  searchTerm: string = '';
  students: any;
  responseData: any;
  quizes: any;
  quizMarks: number[] = [];
  quizDate= [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: Data,
              public authenticationServiceProvider: AuthenticationServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeacherhomePage');
    this.setFilteredItems();
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Home Page!',
      subTitle: '<p>Welcome to the Home Page!</p>' +
      '<p>Choose either to Build a Quiz for your students or to view your students\' performance.</p>' +
      '<p>To build a quiz first select a date on which the quiz will show for your students. Then enter a minimum' +
      'and maximum number. Select an operator and Publish.</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  makequiz() {
    this.navCtrl.push(QuizmakerPage);
  }

  setFilteredItems() {

    this.students = this.dataService.filterItems(this.searchTerm);
}

loadGraphData(student){
    if (student.username && student.studentID)
    {
      this.authenticationServiceProvider.postData(student, "studentQuizGraph").then((result) => {
        this.responseData = result;

        if (this.responseData.quizList)
        {
            this.quizes = this.responseData;
            this.loadGraph(this.quizes);
            //localStorage.setItem('quizList', JSON.stringify(this.quizes));
        }

      }, (err) => {
        console.log("Didn't work fool");
      });
    }
}

loadGraph(data){
    this.quizes = data;
    console.log(this.quizes);
    if(this.quizes.quizList.length == 0){
        alert('No quizes for this student');
        document.getElementById('barCanvas').hidden = true;
        this.quizMarks = [];
        this.quizDate = [];
        return;
    }
    this.quizMarks = [];
    this.quizDate = [];
    document.getElementById('barCanvas').hidden = false;
    Object.keys(this.quizes.quizList).forEach(id => {
        let obj = this.quizes.quizList[id];
        this.quizMarks.push(parseInt(obj.obtainedMarks));
        this.quizDate.push(obj.quizDateTime.substring(0,10));
        console.log(parseInt(obj.obtainedMarks));
    });
    this.quizMarks = this.quizMarks.reverse();
    this.quizDate = this.quizDate.reverse();

      //show graph
      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
            labels: this.quizDate,
            datasets: [{
                label: '# of correct answers',
                data: this.quizMarks,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                      min:0,
                      max:5,
                      autoSkip: false,
                        beginAtZero:true
                    }
                }],
                xAxes:[{
                    ticks:{
                        autoSkip:false,
                    }
                }]
            }
        }
    });
}
}
