import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";

/**
 * Generated class for the TeachervideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teachervideos',
  templateUrl: 'teachervideos.html',
})
export class TeachervideosPage {

  videoData = {"heading":"", "link":"", "teacherEmail":""};  
  teacherData : any;
  responseData : any;
  videoList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationServiceProvider: AuthenticationServiceProvider) {
    this.teacherData = JSON.parse(localStorage.getItem('teacherData'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeachervideosPage');
    var videoPanel = document.getElementById('video-list');
      videoPanel.innerHTML = "";
      
      
    this.authenticationServiceProvider.postData(this.teacherData.teacherData, "fetchVideo").then((result) => {
      this.responseData = result;
      console.log(this.responseData);

      if (this.responseData.videoList)
      {
        this.videoList = this.responseData.videoList;
        Object.keys(this.videoList).forEach(id => {
          let obj = this.videoList[id];
          videoPanel.innerHTML += '<div class="card">'+
              '<ion-item> <span>' + obj.heading + '</span>'+
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
  submitVideo(){
    this.videoData.teacherEmail = this.teacherData.teacherData.email;
    
    if(this.videoData.heading == "" && this.videoData.link == "")
    {
      alert('Enter data in empty field(s)');
    }
    else{
      this.videoData.link = this.videoData.link.replace('/watch?v=','/embed/');
      this.authenticationServiceProvider.postData(this.videoData, "submitVideo").then((result) => {
        this.responseData = result;
        console.log(this.responseData);

        if (this.responseData)
        {
          alert(this.responseData.success.text);
          (<HTMLInputElement>document.getElementById('heading')).value = '';
          (<HTMLInputElement>document.getElementById('link')).value = '';
          this.videoList = null;
          this.videoData = null;
          
          //this.navCtrl.setRoot(this.navCtrl.getActive().component);
          this.ionViewDidLoad();
        }
        else{
          alert('An error occurred please try again!');
        }
      }, (err) => {
        console.log("Didn't work fool");
      });
    }
  }

}
