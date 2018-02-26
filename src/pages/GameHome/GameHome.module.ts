import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GameHomePage } from './GameHome';

@NgModule({
  declarations: [
    GameHomePage,
  ],
  imports: [
    IonicPageModule.forChild(GameHomePage),
  ],
})
export class GameHomePageModule {}
