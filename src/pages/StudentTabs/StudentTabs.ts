import { Component } from '@angular/core';

import { StudentHomePage} from '../StudentHome/StudentHome';
import { StudentVideosPage } from "../StudentVideos/StudentVideos";
import { StudentprofilePage } from "../studentprofile/studentprofile";
import { StudentSettignsPage } from "../StudentSettigns/StudentSettigns";
import {SettingsProvider} from "../../providers/settings/settings";

@Component({
  templateUrl: 'StudentTabs.html'
})
export class StudentTabsPage {

  selectedTheme: String;

  tab1Root = StudentHomePage;
  tab2Root = StudentVideosPage;
  tab3Root = StudentprofilePage;
  tab4Root = StudentSettignsPage;

  constructor(private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

}
