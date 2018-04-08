import { Component } from '@angular/core';
import { Events, NavController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-StudentVideos',
  templateUrl: 'StudentVideos.html'
})
export class StudentVideosPage {
  fontSize: any;
  studentData: any;
  responseData: any;
  videoList: any;
  constructor(public navCtrl: NavController, public events: Events, public alertCtrl: AlertController,
              public authenticationServiceProvider: AuthenticationServiceProvider, private storage: Storage) {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });

    events.subscribe('size', (size) => {
      this.fontSize = size;
    });

    this.studentData = JSON.parse(localStorage.getItem('studentData'));
  }

  ngOnInit() {
    this.storage.get('size').then((val) => {
      this.fontSize = val;
    });
  }

  infoToggle() {
    let alert = this.alertCtrl.create({
      title: 'Video Page!',
      subTitle: '<p>Welcome to the Videos Page!</p>' +
      '<p>Here you can watch videos on how to solve maths problems.</p>',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    var videoPanel = document.getElementById('video-list');

    this.authenticationServiceProvider.postData(this.studentData.studentData, "fetchVideo").then((result) => {
      this.responseData = result;
      console.log(this.responseData);

      if (this.responseData.videoList)
      {
        this.videoList = this.responseData.videoList;
        Object.keys(this.videoList).forEach(id => {
          let obj = this.videoList[id];
          videoPanel.innerHTML += '<div class="card">'+
              '<ion-item><span> ' + obj.heading + '</span>' +
                  '<div class="video-container">'+
                      '<iframe src="'+ obj.link+'" frameborder="0" width="560" height="315"></iframe>'+
                  '</div>'+
              '</ion-item>'+
          '</div> </br>';
            });

      }
      else{
        alert('An error occurred please try again!');
      }
    }, (err) => {
      console.log("Didn't work fool");
    });
  }
}
