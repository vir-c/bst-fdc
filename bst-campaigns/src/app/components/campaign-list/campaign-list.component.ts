import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Campaign, CampaignTypes } from 'src/app/app.types';

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
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      console.log(params)
      this.filterCampaigns(params.type)
      
    })
  }

  filterCampaigns(type: CampaignTypes){
    const lastMidNightTimeStamp = (new Date()).setUTCHours(0, 0, 0, 0)
    const nextMidNightTimeStamp = (new Date()).setUTCHours(24, 0, 0, 0)

    switch(type){
      case CampaignTypes.UPCOMING:
        this.campaigns = campaignsList.filter((el)=>el.timestamp>nextMidNightTimeStamp)
        break;
      case CampaignTypes.PAST:
          this.campaigns = campaignsList.filter((el)=>el.timestamp<lastMidNightTimeStamp)
          break;
      case CampaignTypes.LIVE:
        this.campaigns = campaignsList.filter((el)=> ( el.timestamp<nextMidNightTimeStamp && el.timestamp>lastMidNightTimeStamp ))
        break;
    }
  }

}


const campaignsList: Array<Campaign> = [
  {
    id: "4832b2fe",
    timestamp: 1616544000000,
    title: "Auto Chess",
    img: "chess.png",
    countryCode: "US" 
  },
  {
    id: "4cbedd02",
    timestamp: 1616544000000,
    title: "PUBG MOBILE",
    img: "pubg.png",
    countryCode: "US" 
  },
  {
    id: "6b07ee3e",
    timestamp: 1616544000000,
    title: "Flow Free",
    img: "flow-free.png",
    countryCode: "US" 
  },
  {
    id: "72aedbfc",
    timestamp: 1572220800000,
    title: "Garena Free Fire...",
    img: "garenaff.png",
    countryCode: "US" 
  },
  {
    id: "78d46eac",
    timestamp: 1572220800000,
    title: "MORTAL KOMBAT",
    img: "mortal-kombat.png",
    countryCode: "US" 
  },
  {
    id: "807528cc",
    timestamp: 1572220800000,
    title: "Summoners War",
    img: "summoners-war.png",
    countryCode: "US" 
  },  
  {
    id: "84027544",
    timestamp: 1572220800000,
    title: "Need for Speed™ No Limits",
    img: "nfs.png",
    countryCode: "US" 
  },  
  {
    id: "8852b172",
    timestamp: 1572220800000,
    title: "Shadow Fight 3",
    img: "shadow-fight.png",
    countryCode: "US" 
  }
]