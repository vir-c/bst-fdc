import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/app.types';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { CampaignService } from 'src/app/services/campaign.service';
dayjs.extend(relativeTime);

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.scss']
})
export class CampaignItemComponent implements OnInit {

  @Input() campaign!: Campaign;
  
  model: NgbDateStruct | undefined;
  @ViewChild('ngbDatepicker') ngbDatepicker: NgbInputDatepicker | undefined
  
  constructor(private campaignService: CampaignService) { }

  ngOnInit(): void {
    
  }

  public getPassedTime(time: number | undefined){
    if(!time) return ""
    else return dayjs(time).fromNow()
  }

  onNewDate(event: any){
    this.campaignService.updateCampaignDate(this.campaign.id, new Date(event.year, event.month-1, event.day).getTime())
  }

}
