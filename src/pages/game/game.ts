import "pixi";
import "p2";
import * as Phaser from "phaser-ce";
import { AlertController, ToastController } from "ionic-angular";
import { Component } from "@angular/core";
import { trigger, state, style, animate, transition } from '@angular/animations';
/**
 * Main entry game class
 * @export
 * @class Game
 * @extends {Phaser.Game}
 */
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
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
export class Game extends Phaser.Game {
  /**
   * Creates an instance of Game.
   * @memberof Game
   */
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
  public around: any;
  public toAngry: any;
  public noAngry: any;
  public jumpUp: any;
  public mkyScream: any;
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
    // public events: Events,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
  ){
// call parent constructor
    super( 540, 960, Phaser.CANVAS, "game", { preload: preload, create: create, update: update, render: render } );
// add some game states
// start with boot state
    let nativeResolution = {
      width:360,
      height:640,
    };
// add some game states
    function preload(){
      this.game.stage.backgroundColor = '#85b5e1';
      this.game.load.crossOrigin = 'anonymous';
      this.game.load.spritesheet('player', 'assets/img/sprite.png', 64, 55);
      this.game.load.tilemap('tilemap', 'assets/img/ionic_game_level.json', null, Phaser.Tilemap.TILED_JSON);
      this.game.load.image('platform', 'assets/img/ionic-tiles1.png');
      this.game.load.image('platform2', 'assets/img/ionic-tiles2.png');
      this.game.load.image('tiles', 'assets/img/ionic-tiles1.png');
      this.game.load.image('ocean', 'assets/img/sky_01.png');
      this.game.load.image('bees', 'assets/img/bee.png');
      this.game.load.image('campo', 'assets/img/campo.jpeg');
      this.game.load.image('jungle1', 'assets/img/jungle1.jpeg');
      this.game.load.image('jungle1a', 'assets/img/jungle1a.jpeg');
      this.game.load.image('jungle2', 'assets/img/jungle2.jpeg');
      this.game.load.image('jungle2a', 'assets/img/jungle2a.jpeg');
      this.game.load.image('jungle3', 'assets/img/jungle3.jpeg');
      this.game.load.image('jungle3a', 'assets/img/jungle3a.jpeg');
      this.game.load.image('jungle3b', 'assets/img/jungle3b.jpeg');
      this.game.load.audio('forestSound', 'assets/audio/forestSound.ogg');
      this.game.load.audio('monkeyScream', 'assets/audio/monkeyScream.ogg');
      this.game.load.audio('correctAnswer', 'assets/audio/correctAnswer.ogg');
    }
    var player;
    var playe2;
    var bees;
    var platforms;
    var cursors;
    var jumpButton;
    var music;
    var scream;
    var answerOk;
    var somersault;
    var RIGHT = 0, LEFT = 1;

    function render() {
    }

    function create() {
      this.game.scale.ratio = (this.game.width/nativeResolution.width);
      this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.background = this.game.add.sprite(this.game.width/2,this.game.height/2, 'jungle1');
      this.game.background.anchor.setTo(0.5,0.5);
      this.game.background.inputEnabled = true;

      // Create some local groups for later use.
      bees = this.game.add.group();
      // Directly create a sprite and add it to a group
      // using just one line.
      // bees.create(200, 240, 'bees');
      bees.enableBody = true;
      bees.enabled = true;
      bees.inputEnabled = true;
      // this.game.physics.arcade.enable(bees);
      // Create some baddie bees.
      for (var i = 0; i < 8; i++)
      {
        createBaddie();
      }

      //Create sprite player
      player = this.game.add.sprite(0, 600, 'player');
      player.anchor.set(0.5);
      player.smoothed = false;
      player.enabled = true;
      player.inputEnabled = true;
      this.game.physics.arcade.enable(player);
      this.game.add.tween(player.scale).to( { x: 2, y: 2 }, 2000, Phaser.Easing.Linear.None, true);//, 0, 1000, true);
      player.body.collideWorldBounds = true;
      player.body.gravity.y = 500;

      //Create sprite playe2
      playe2 = this.game.add.sprite(50, 572, 'player');
      playe2.anchor.set(0.5);
      playe2.smoothed = true;
      player.enabled = true;
      playe2.inputEnabled = true
      this.game.physics.arcade.enable(playe2);
      playe2.alpha = 0;
      this.game.add.tween(playe2.scale).to( { x: 3, y: 3 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
      this.game.add.tween(playe2).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true, 0, 1000, true);
      playe2.body.collideWorldBounds = true;
      playe2.body.gravity.y = 500;
      playe2.updateIfVisible = true;

      var killTween = this.game.add.tween(playe2.scale);
      killTween.to({x:0,y:0}, 200, Phaser.Easing.Linear.None);
      killTween.onComplete.addOnce(function(){
        playe2.kill();
      }, this);
      killTween.start();

      platforms = this.game.add.physicsGroup();
      // platforms.create(0, 100, 'platform');
      // platforms.create(0, 400, 'platform');
      platforms.create(0, 651, 'ocean');
      platforms.create(0, 650, 'platform');
      platforms.create(520, 650, 'platform');
      // platforms.create(0, 400, 'campo');
      // platforms.create(0, 651, 'jungle1');
      // platforms.create(0, 651, 'jungle1a');
      // platforms.create(0, 651, 'jungle2');
      // platforms.create(0, 651, 'jungle2a');
      // platforms.create(0, 651, 'jungle3');
      // platforms.create(0, 651, 'jungle3a');
      // platforms.create(0, 651, 'jungle3b');
      platforms.setAll('body.immovable', true);

      //Create a running animation for the sprite and play it
      player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);
      player.animations.play('right');
      playe2.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);
      playe2.animations.play('right');

      //Make the camera follow the sprite
      this.game.camera.follow(player);
      this.game.camera.follow(playe2);
      cursors = this.game.input.keyboard.createCursorKeys();
      jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

      // Behaviors relative to the Quiz
      somersault = this.game.add.tween(player).to( { angle: 360 }, 1500, Phaser.Easing.Linear.None, true);

      answerOk = this.game.add.audio('correctAnswer');
      answerOk.allowMultiple = true;

      scream = this.game.add.audio('monkeyScream');
      // scream.allowMultiple = true;

      music = this.game.add.audio('forestSound');
      // music.allowMultiple = true;
      music.loopFull();
      // this.game.input.onDown.add(changeVolume, this);

      this.game.time.events.loop(2000, createBaddie);
    }

    // function changeVolume(pointer) {
    //   if (pointer.y < 100) {
    //     music.mute = false;
    //   }
    //   else if (pointer.y < 300) {
    //     music.volume += 0.1;
    //   }
    //   else {
    //     music.volume -= 0.1;
    //   }
    // }

    function update () {
      //Make the sprite collide with the ground layer
      this.game.physics.arcade.collide(player, platforms);
      this.game.physics.arcade.collide(playe2, platforms);

      playe2.x = player.x; //To do playe2 follows player
      playe2.y = player.y; //To do playe2 follows player

      // player.body.velocity.x = 50;
      // playe2.body.velocity.x = 50;

      if (cursors.left.isDown)
      {
        player.scale.setTo(-2, 2); //Flip the player
        player.body.velocity.x = -200;
        player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true); //[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 16, true);
        player.animations.play('left');

        playe2.scale.setTo(-2, 2); //Flip the playe2
        playe2.body.velocity.x = -200;
        playe2.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);//[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 16, true);
        playe2.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
        player.scale.setTo(2, 2); //Flip the player
        player.body.velocity.x = 200;
        player.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);
        player.animations.play('right');

        playe2.scale.setTo(2, 2); //Flip the playe2
        playe2.body.velocity.x = 200;
        playe2.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);
        playe2.animations.play('right');
      }

      if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
      {
        player.body.velocity.y = -400;
        playe2.body.velocity.y = -400;
        // player.animations.add('top', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 12, true);
      }

      //Touch Move to lef and right
      if (this.game.input.pointer1.isDown) {
        if (Math.floor(this.game.input.x / (this.game.width / 2)) === LEFT) {
          //  Move to the right
          player.scale.setTo(2, 2); //Flip the player
          playe2.scale.setTo(2, 2); //Flip the playe2
          player.body.velocity.x = 200;
          playe2.body.velocity.x = 200;
          playe2.animations.add('right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true);
          playe2.animations.play('right');
        }
        if (Math.floor(this.game.input.x / (this.game.width / 2)) === RIGHT) {
          //  Move to the left
          player.scale.setTo(-2, 2); //Flip the player
          playe2.scale.setTo(-2, 2); //Flip the playe2
          player.body.velocity.x = -200;
          playe2.body.velocity.x = -200;
          player.animations.add('left', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 16, true); //[14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 16, true);
          player.animations.play('left');
        }
        this.game.input.onTap.add(onTap);
      }
    }

    function onTap(pointer, doubleTap) {
      if (doubleTap){
        player.body.velocity.y = -400;
      }
    }

    this.toAngry = function angry(){
      console.log('toAngry input: ', playe2.visible);
      if (playe2.visible === false) {
        playe2.visible = true;
        console.log('toAngry turn: ', playe2.visible);
      }
    }

    this.noAngry = function angry(){
      console.log('noAngry input: ', playe2.visible);
      if(playe2.visible === true){
        playe2.visible = false;
        console.log('noAngry turn: ', playe2.visible);
      }
    }

    this.jumpUp = function jumpAround(){
      player.body.velocity.y = -400;
      somersault.start();
      answerOk.play();
      this.noAngry();
      scream.stop();
    }

    this.mkyScream = function screamMonkey() {
      scream.loopFull(); //play();
      this.toAngry();
    }

    function createBaddie() {
      var bee = bees.create(360 + Math.random() * 200, 120 + Math.random() * 450,'bees');
      moveIndividual(bee);
    }

    function moveIndividual(moved){
      moved.body.velocity.x = -150;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
    //Whe set a 1.5 seconds timeout and show user feedback whit a spinner on the user interface
    //Even though this is called when the view loads there are some elements that are not drawn and mess up the measurements of elements
    //In this particular case the navbar and the html position of the whole page
    setTimeout(() => {
      this.loading = false;
      this.askQuestion();
    }, 1500);
  }
//////////  S T A R T  T H E  Q U I Z  //////////

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
    this.reply = '';
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
      if(ans == null || ans == undefined ) {
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
          //Call the jump here...
          this.jumpUp();
          this.presentToast();
          this.show = false;
          this.askQuestion();
        }
        else {
          blur();
          let alert = this.alertCtrl.create({
            title: `<span class="badanswer"> Wrong Answer! ${this.reply}<span>`,
            message: `<span class="correct_ans"> The correct answer is ${this.num1} ${this.randomOperator} ${this.num2} = <span class="certa">${this.result}</span></span>`,
            buttons: [
              {
                text: 'Ok',
                // role: 'cancel',
                handler: () => {
                  console.log('OK clicked');
                  focus();
                  this.focus = false;
                  //Call the scream here...
                  this.mkyScream();
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
            title: `<span class="certa"> Well Done! </span>`,
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
            title: `<span class="certa"> Well Done! </span>`,
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
