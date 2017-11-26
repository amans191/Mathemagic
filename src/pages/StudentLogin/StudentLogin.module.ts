import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLoginPage } from './StudentLogin';

@NgModule({
  declarations: [
    StudentLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLoginPage),
  ],
})
export class StudentLoginModule {}
