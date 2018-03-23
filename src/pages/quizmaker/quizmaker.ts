import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";


@Component({
  selector: 'page-quizmaker',
  templateUrl: 'quizmaker.html'
})
export class QuizmakerPage {

  responseData: any;
  teacherData :any;
  quizData = {"teacher_email":"", "quizDateTime":"", "ques1":"", "ques2":"", "ques3":"", "ques4":"", "ques5":"", "ans1":"", "ans2":"", "ans3":"", "ans4":"", "ans5":""};
  constructor(public navCtrl: NavController, public authenticationServiceProvider: AuthenticationServiceProvider,
              private toastCtrl: ToastController) {
    var data = JSON.parse(localStorage.getItem('teacherData'));
    this.teacherData = data.teacherData;
  }

  private generate  : boolean = false;
  private error    : string  = '';
  private success  : string  = '';
  private numOfQuestion : number = 5;

  private altAdditionWords       = ['+','Plus','Add'];
  private altSubtractionWords    = ['-','Subtract','Minus','take away'];
  private altMultiplicationWords = ['x','Multiply','times'];
  private altDivisionWords       = ['÷','Divide','Divided by','From'];

  public MaxNum: number;
  public MinNum: number;
  public operator: string = '';
  public questions: Question[] = [];


  randomNumber = () : number => {
    return Math.floor(Math.random()*(this.MaxNum - this.MinNum))+1;
  }

  randomAddOperator = () : string => {
    return this.altAdditionWords[Math.floor(Math.random()*this.altAdditionWords.length)];
  }

  randomSubtractOperator = () : string => {
    return this.altSubtractionWords[Math.floor(Math.random()*this.altSubtractionWords.length)];
  }

  randomMultiplicationOperator = () : string => {
    return this.altMultiplicationWords[Math.floor(Math.random()*this.altMultiplicationWords.length)];
  }

  randomDivisionOperator = () : string => {
    return this.altDivisionWords[Math.floor(Math.random()*this.altDivisionWords.length)];
  }

  createQuiz(){
    if(this.questions.length > 0){
      this.questions = [];
      console.log("resetting array!");
    }
    if(this.MinNum >= this.MaxNum ){
      this.error = 'Maximum Number should be greater than Minimum Number';
      console.log(this.error);
    }
    else {
      console.log(this.operator);
      this.generate = true; this.error = ''; this.success = '';
      for(let i = 1; i <= this.numOfQuestion; i++) {
        let q = new Question();
        if(this.operator ==='Addition'){
          q.create(i, this.randomNumber(),this.randomAddOperator(), this.randomNumber(),null);
          q.answer=(q.num1+q.num2);
          this.insertQuestion(q);
        }

        if(this.operator ==='Subtraction'){
          q.create(i, this.randomNumber(),this.randomSubtractOperator(), this.randomNumber(),null);
          while(q.num1 < q.num2){
            q.num1=this.randomNumber();q.num2=this.randomNumber();
          }
          q.answer=(q.num1-q.num2);
          this.insertQuestion(q);
        }

        if(this.operator ==='Multiplication'){
          q.create(i, this.randomNumber(),this.randomMultiplicationOperator(), this.randomNumber(),null);
          q.answer=(q.num1*q.num2);
          this.insertQuestion(q);
        }

        if(this.operator ==='Division'){
          q.create(i, this.randomNumber(),this.randomDivisionOperator(), this.randomNumber(),null);
          while(q.num1 % q.num2 !==0){
            q.num1=this.randomNumber();
            q.num2=this.randomNumber();
          }
          q.answer=(q.num1/q.num2);
          this.insertQuestion(q);
        }

      }
    }

    // Javascript to show strings

    if(this.generate){
      var inner = `<h4>Quiz Created</h4>`;
      for(var i = 0; i < this.questions.length; i++){
        inner +=
          `<div>
            <label>`
          + this.questions[i].id +
          `</label> : `
          + this.questions[i].num1 + " "
          + this.questions[i].operator + " "
          + this.questions[i].num2 + " "
          + ' = ' + " "
          + this.questions[i].answer +
          `</div>`;

        if(i == 0)
        {
          this.quizData.ques1 = this.questions[i].num1 + " "
            + this.questions[i].operator + " "
            + this.questions[i].num2;

          this.quizData.ans1 = this.questions[i].answer + "";
        }
        if(i == 1)
        {
          this.quizData.ques2 = this.questions[i].num1 + " "
            + this.questions[i].operator + " "
            + this.questions[i].num2;

          this.quizData.ans2 = this.questions[i].answer + "";
        }
        if(i == 2)
        {
          this.quizData.ques3 = this.questions[i].num1 + " "
            + this.questions[i].operator + " "
            + this.questions[i].num2;

          this.quizData.ans3 = this.questions[i].answer + "";
        }
        if(i == 3)
        {
          this.quizData.ques4 = this.questions[i].num1 + " "
            + this.questions[i].operator + " "
            + this.questions[i].num2;

          this.quizData.ans4 = this.questions[i].answer + "";
        }
        if(i == 4)
        {
          this.quizData.ques5 = this.questions[i].num1 + " "
            + this.questions[i].operator + " "
            + this.questions[i].num2;

          this.quizData.ans5 = this.questions[i].answer + "";
        }
      }
      document.getElementById('generate').innerHTML = inner;

      if (this.quizData.ques1 && this.quizData.ques2 && this.quizData.ques3 &&
        this.quizData.ques4 && this.quizData.ques5)
      {
        this.quizData.teacher_email = this.teacherData.email;
        this.authenticationServiceProvider.postData(this.quizData, "submitQuiz").then((result) => {
          this.responseData = result;
          console.log(this.responseData);

          if (this.responseData)
          {
            //to carry cache for local storage
            //localStorage.setItem('quizData', JSON.stringify(this.responseData))
            alert('Quiz Added!');
          }

        }, (err) => {
          //console.warn(err.responseText);
          console.log("Didn't work man!");
        });
      }
      else
      {
        alert("Invalid Details, please enter again!");
      }

    }

  }

  insertQuestion(q) {
    this.questions.push(q);
  }
}

class Question {

  public id       : number = 0;
  public num1     : number = 0;
  public operator : string = '';
  public num2     : number = 0;
  public answer   : number = 0;

  create = (id       : number,
            num1     : number,
            operator : string,
            num2     : number,
            answer   : number
  ) => {
    this.id       = id;
    this.num1     = num1;
    this.operator = operator;
    this.num2     = num2;
    this.answer   = answer;
  }
}
