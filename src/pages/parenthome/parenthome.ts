import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from "../popover/popover";
import { Chart } from 'chart.js';
import {AuthenticationServiceProvider} from "../../providers/authentication-service/authentication-service";

/**
 * Generated class for the ParenthomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parenthome',
  templateUrl: 'parenthome.html',
})
export class ParenthomePage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  public ParentDetails : any;
  students: any;
  responseData: any;
  quizes: any;
  quizMarks: number[] = [];
  quizDate= [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController,
              public authenticationServiceProvider: AuthenticationServiceProvider) {
    const data = JSON.parse(localStorage.getItem('parentData'));
    this.ParentDetails = data.parentData;
    this.students = this.ParentDetails;
    console.log(this.ParentDetails);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParenthomePage');
    console.log(this.ParentDetails);
    this.loadGraphData(this.students);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

loadGraphData(student){
  console.log(student);
  if (student.studentID)
  {
    this.authenticationServiceProvider.postData(student, "studentQuizGraph").then((result) => {
      this.responseData = result;

      if (this.responseData.quizList)
      {
          this.quizes = this.responseData;
          this.loadGraph(this.quizes);
      }
      else{
        alert('Your Child has no quiz record');
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
      alert('No quizes for your child');
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
