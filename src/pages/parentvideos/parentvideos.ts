import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthenticationServiceProvider } from "../../providers/authentication-service/authentication-service";

/**
 * Generated class for the ParentvideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parentvideos',
  templateUrl: 'parentvideos.html',
})
export class ParentvideosPage {

  parentData : any;
  responseData : any;
  videoList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public authenticationServiceProvider: AuthenticationServiceProvider) {
  this.parentData = JSON.parse(localStorage.getItem('parentData'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentvideosPage');
    var videoPanel = document.getElementById('video-list');

    this.authenticationServiceProvider.postData(this.parentData.parentData, "fetchVideo").then((result) => {
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


}
