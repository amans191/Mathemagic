import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the GameHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    //Animation for the Quiz
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
})
export class HomePage {
  /**
   * Game instance
   * @private
   * @type {Game}
   * @memberof HomePage
   */
  // private gameInstance: Game;

  /**
   * Creates an instance of HomePage.
   * @param {NavController} navCtrl
   * @memberof HomePage
   */
    // constructor(
    //   public navCtrl: NavController
    // ){
    //   this.gameInstance = new Game();
    // }

  public showUp = true;
  public quiz: any; // = document.querySelector('#quiz');
  public score: any; //  = document.querySelector('#score');
  public level: any; //  = quiz.querySelector('#level');
  public question: any; //  = quiz.querySelector('#question');
  public userScore = 0;
  public totalQuestions = 0;
  public userLevel = 1;
  public operators = [];
  public range = [];
  public result = 0;
  public focus = true;
  public num1;
  public num2;
  public randomOperator;
  public reply;
  public randomTime;

  loading:boolean = true;
  show:boolean = false;
  state;

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    // private game: Game,
  ){
    // this.gameInstance = new Game();
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FullScreenPage');

    //Whe set a 2 seconds timeout and show user feedback whit a spinner on the user interface
    //Even though this is called when the view loads there are some elements that are not drawn and mess up the measurements of elements
    //In this particular case the navbar and the html position of the whole page
    setTimeout(() => {
      this.loading = false;
      // this.gameInstance = new Game();
      // this.generateQuestion();
      this.askQuestion();
    }, 1000);
  }

  askQuestion() {
    this.randomTime = this.randomNumber(3,9)*1000; //calculating a random time
    console.log('RandomTime: ', this.randomTime);
    setTimeout(() => {
      this.generateQuestion();
    }, this.randomTime); //waiting for a random time between 1 and 4 seconds to start the quiz
  }

  setOperatorsAndRange() {
    switch (this.userLevel) {
      case 1:
        this.operators = ['+', '-'];
        this.range = [1,10];
        break;
      case 2:
        this.operators = ['+', '-'];
        this.range = [11,30];
        break;
      case 3:
        this.operators = ['+', '-'];
        this.range = [31,50];
        break;
      case 4:
        this.operators = ['*', '/'];
        this.range = [1,10];
        break;
      case 5:
        this.operators = ['+', '-', '*', '/'];
        this.range = [1,10];
        break;
    }
  }

  calculateResult(x,y,operator) {
    switch (operator) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
      case '/': return x / y;
    }
  }

  randomNumber(min,max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  generateQuestion() {
    this.show = true;
    this.reply = ''; // Limpa os dados no input, se houver
    this.score = `Hits:  ${this.userScore} of ${this.totalQuestions}`;
    // level.innerHTML = `Level ${userLevel}`;
    this.setOperatorsAndRange();
    this.num1 = this.randomNumber(this.range[0],this.range[1]);
    this.num2 = this.randomNumber(this.range[0],this.range[1]);
    this.randomOperator = this.operators[this.randomNumber(0,this.operators.length)];
    if(this.randomOperator === '/') {
      while(this.num1 % this.num2 !== 0) {
        this.num1 = this.randomNumber(this.range[0],this.range[1]);
        this.num2 = this.randomNumber(this.range[0],this.range[1]);
      }
    }
    this.result = this.calculateResult(this.num1, this.num2, this.randomOperator);
    this.question = `${this.num1} ${this.randomOperator} ${this.num2} = `;
  }

// this.quiz.addEventListener('keyup', function(reply) {
  veriFy(reply){
    const ans = reply;
    if(focus){
      if(ans === null || ans === undefined ) {
        blur();
        let alert = this.alertCtrl.create({
          title: 'Hey!',
          message: 'Enter the answer!',
          buttons: [
            {
              text: 'Ok',
              // role: 'cancel',
              handler: () => {
                console.log('OK clicked');
                focus();
                this.focus = false;
                // this.reply = '';
              }
            }
          ],
          cssClass: 'alertCustomCss'
        });
        alert.present();
      }
      else {
        if(+ans === this.result) {
          this.userScore++;
          //Chamar o pulo aqui...
          // this.gameInstance.jumpAround();
          this.presentToast();
          this.show = false;
          this.askQuestion();
        }
        else {
          blur();
          let alert = this.alertCtrl.create({
            title: `<span class="badanswer"> Wrong Answer! ${this.reply}<span>`,
            message: `<span class="correct_ans"> Correct answer for ${this.num1} ${this.randomOperator} ${this.num2} = <span class="certa">${this.result}</span></span>`,
            buttons: [
              {
                text: 'Ok',
                // role: 'cancel',
                handler: () => {
                  console.log('OK clicked');
                  focus();
                  this.focus = false;
                  this.generateQuestion();
                }
              }
            ],
            cssClass: 'alertWrongCss'
          });
          alert.present();
        }
        this.totalQuestions++;
        const currentLevel = this.userLevel;
        this.userLevel = Math.floor(this.userScore / 10) + 1;
        if(currentLevel !== this.userLevel) {
          blur();
          let alert = this.alertCtrl.create({
            title: `<span class="certa"> Really nice! </span>`,
            message: `<span class="correct_ans"> You reached Level <span class="certa">${this.userLevel}</span>!!!</span>`,
            buttons: [
              {
                text: 'Ok',
                // role: 'cancel',
                handler: () => {
                  console.log('OK clicked');
                  focus();
                  this.focus = false;
                }
              }
            ],
            cssClass: 'alertCustomCss'
          });
          alert.present();
        }
        if(this.userLevel === 6) {
          blur();
          let alert = this.alertCtrl.create({
            title: `<span class="certa"> Really nice! </span>`,
            message: `<span class="correct_ans"> You completed the Quiz! </span>`,
            buttons: [
              {
                text: 'Ok',
                // role: 'cancel',
                handler: () => {
                  console.log('OK clicked');
                  this.userScore = 0;
                  this.userLevel = 1;
                  this.totalQuestions = 0;
                  // this.generateQuestion();
                  this.show = false;
                  this.askQuestion();
                  focus();
                  this.focus = false;
                }
              }
            ],
            cssClass: 'alertCustomCss'
          });
          alert.present();
        }
        // else this.generateQuestion();
      }
    }
    this.focus = true;
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Correct Answer!',
      duration: 1500,
      cssClass: "toastSuccess",
      position: 'top'
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }
}
