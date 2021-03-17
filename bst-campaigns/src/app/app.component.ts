import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CampaignTypes } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  campaignType: CampaignTypes = CampaignTypes.UPCOMING
  CAMPAIGNTYPES = CampaignTypes

  constructor(private router: Router, public translate: TranslateService, private route:ActivatedRoute ){
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(){
    console.log(this.route.snapshot)
  }

  changeCampaign(type: CampaignTypes){
    this.campaignType = type
    this.router.navigate(["campaigns/", type])
  }
}