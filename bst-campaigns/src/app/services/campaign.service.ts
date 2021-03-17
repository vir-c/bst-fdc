import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Campaign } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaigns: Array<Campaign> = campaignsList
  private campaignsUpdated: Subject<string> = new Subject<string>()

  constructor() { }

  getCampaigns(){
    return this.campaigns;
  }

  updateCampaignDate(id:string, newTimeStamp: number){
    const campaign = this.campaigns.find((c)=>c.id==id)
    if(campaign){
      campaign.timestamp = newTimeStamp
    }
    this.campaignsUpdated.next('updated') // inner string is not used, may be for more complex usecase
  }

  campaignsChanges(){
    return this.campaignsUpdated
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