import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from "../popover/popover";

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

  public ParentDetails : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    const data = JSON.parse(localStorage.getItem('parentData'));
    this.ParentDetails = data.parentData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParenthomePage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
}
