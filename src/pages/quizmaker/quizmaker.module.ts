import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuizMakerPage } from './quizmaker';

@NgModule({
  declarations: [
    QuizMakerPage,
  ],
  imports: [
    IonicPageModule.forChild(QuizMakerPage),
  ],
})
export class QuizMakerPageModule {}
