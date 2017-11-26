import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherhomePage } from './teacherhome';

@NgModule({
  declarations: [
    TeacherhomePage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherhomePage),
  ],
})
export class TeacherhomePageModule {}
