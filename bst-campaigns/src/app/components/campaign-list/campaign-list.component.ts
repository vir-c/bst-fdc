import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import { Campaign, CampaignTypes } from 'src/app/app.types';
import { CampaignService } from 'src/app/services/campaign.service';

/**
 * component to manage individual an individual campaign
 */
@Component({
  selector: 'app-campaign-list',
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.scss']
})
export class CampaignListComponent implements OnInit {

  campaigns: Array<Campaign> = []
  campaignType!: CampaignTypes
  campaignsSubscription!: Subscription

  constructor(private route: ActivatedRoute, private campaignService:CampaignService){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.campaignType = params.type
      this.filterCampaigns()
    })

    this.campaignsSubscription = this.campaignService.campaignsChanges().subscribe(()=>this.filterCampaigns())

  }

  filterCampaigns(){
    const lastMidNightTimeStamp = (new Date()).setUTCHours(0, 0, 0, 0)
    const nextMidNightTimeStamp = (new Date()).setUTCHours(24, 0, 0, 0)

    switch(this.campaignType){
      case CampaignTypes.UPCOMING:
        this.campaigns = this.campaignService.getCampaigns().filter((el)=>el.timestamp>nextMidNightTimeStamp)
        break;
      case CampaignTypes.PAST:
          this.campaigns = this.campaignService.getCampaigns().filter((el)=>el.timestamp<lastMidNightTimeStamp)
          break;
      case CampaignTypes.LIVE:
        this.campaigns = this.campaignService.getCampaigns().filter((el)=> ( el.timestamp<nextMidNightTimeStamp && el.timestamp>lastMidNightTimeStamp ))
        break;
    }
  }


  ngOnDestroy(){
    if(this.campaignsSubscription) this.campaignsSubscription.unsubscribe()
  }
}