import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Campaign } from '../app.types';
import { config } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private campaigns: Array<Campaign> = []
  private campaignsUpdated: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient ) {
    let campaigns = localStorage.getItem(config.lsKeys.campaigns)
    if(!campaigns){
      this.fetchCampaigns().subscribe((data)=>{
        this.campaigns = data
        this.campaignsUpdated.next("init")
      })
    }else{
      this.campaigns = JSON.parse(campaigns)
    }

   }

  getCampaigns(){
    return this.campaigns;
  }

  updateCampaignDate(id:string, newTimeStamp: number){
    const campaign = this.campaigns.find((c)=>c.id==id)
    if(campaign){
      campaign.timestamp = newTimeStamp
    }
    this.campaignsUpdated.next('updated') // inner string is not used, may be for more complex usecase
    localStorage.setItem(config.lsKeys.campaigns, JSON.stringify(this.campaigns))
  }

  campaignsChanges(){
    return this.campaignsUpdated
  }

  fetchCampaigns(): Observable<Array<Campaign>>{
    return this.http.get(".netlify/functions/get-campaigns").pipe(
      map((res:any)=>res.data))
  }

}