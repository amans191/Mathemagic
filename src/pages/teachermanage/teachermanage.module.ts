import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeachermanagePage } from './teachermanage';

@NgModule({
  declarations: [
    TeachermanagePage,
  ],
  imports: [
    IonicPageModule.forChild(TeachermanagePage),
  ],
})
export class TeachermanagePageModule {}
