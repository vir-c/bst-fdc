import { Injectable } from '@angular/core';
import { timeStamp } from 'node:console';
import { Campaign } from '../app.types';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaigns: Array<Campaign> = []
  constructor() { }

  getCampaigns(){
    return this.campaigns;
  }

  updateCampaignDate(id:string, newTimeStamp: number){
    const campaign = this.campaigns.find((c)=>c.id==id)
    if(campaign){
      campaign.timestamp = newTimeStamp
    }
  }
  
}
