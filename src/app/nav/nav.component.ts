import { Component, OnInit } from '@angular/core';

import {
  faLightbulb as faSolidLightbulb,
  faDollarSign,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";

import { faLightbulb as faRegularLightbulb } from "@fortawesome/free-solid-svg-icons";
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faLightbulb!: IconDefinition;
  faDollarSign = faDollarSign;
 

  constructor( private themeservice:ThemeService) { }

  ngOnInit(): void {

     this.setLightbulb();
  }


  setLightbulb() {
    if (this.themeservice.isDarkTheme()) {
      this.faLightbulb = faRegularLightbulb;
    } else {
      this.faLightbulb = faSolidLightbulb;
    }
  }

  toggleTheme() {
    if (this.themeservice.isDarkTheme()) {
      this.themeservice.setLightTheme();
    } else {
      this.themeservice.setDarkTheme();
    }

    this.setLightbulb();
  }

}
