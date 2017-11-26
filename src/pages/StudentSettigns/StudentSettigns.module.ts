import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentSettignsPage } from './StudentSettigns';

@NgModule({
  declarations: [
    StudentSettignsPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentSettignsPage),
  ],
})
export class SettingsPageModule {}
