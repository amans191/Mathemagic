import { Component } from '@angular/core';

import { TeacherhomePage } from "../teacherhome/teacherhome";
import { TeachervideosPage } from "../teachervideos/teachervideos";
import { TeachermanagePage } from "../teachermanage/teachermanage";
import { TeachersettingsPage } from "../teachersettings/teachersettings";


@Component({
  templateUrl: 'TeacherTabs.html'
})
export class TeacherTabsPage {

  tab1Root = TeacherhomePage;
  tab2Root = TeachervideosPage;
  tab3Root = TeachermanagePage;
  tab4Root = TeachersettingsPage;

  constructor() {

  }

}
