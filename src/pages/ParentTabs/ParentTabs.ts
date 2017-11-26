import { Component } from '@angular/core';

import { ParenthomePage } from "../parenthome/parenthome";
import { ParentvideosPage } from "../parentvideos/parentvideos";
import { ParentsettingsPage } from "../parentsettings/parentsettings";

@Component({
  templateUrl: 'ParentTabs.html'
})
export class ParentTabsPage {

  tab1Root = ParenthomePage;
  tab2Root = ParentvideosPage;
  tab3Root = ParentsettingsPage;

  constructor() {

  }

}
