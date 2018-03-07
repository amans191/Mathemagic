import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizmakerPage } from './quizmaker';

@NgModule({
  declarations: [
    QuizmakerPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizmakerPage),
  ],
})
export class QuizmakerPageModule {}
