import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CampaignTypes } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  campaignType: CampaignTypes = CampaignTypes.UPCOMING
  CAMPAIGNTYPES = CampaignTypes

  constructor(private router: Router,public translate: TranslateService){
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeCampaign(type: CampaignTypes){
    this.campaignType = type
    this.router.navigate(["campaigns/", type])
  }
}