import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Campaign } from 'src/app/app.types';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
import { NgbDateStruct, NgbInputDatepicker, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CampaignService } from 'src/app/services/campaign.service';
import * as locale  from 'dayjs/locale/de' 
import { TranslateService } from '@ngx-translate/core';
dayjs.extend(relativeTime);
dayjs.locale(locale)

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.scss']
})
export class CampaignItemComponent implements OnInit {

  @Input() campaign!: Campaign;
  
  model: NgbDateStruct | undefined;
  @ViewChild('ngbDatepicker') ngbDatepicker: NgbInputDatepicker | undefined
  
  constructor(private campaignService: CampaignService, private modalService: NgbModal, private translateService: TranslateService) { }

  ngOnInit(): void {
    
  }

  public getPassedTime(time: number | undefined){
    if(!time) return ""
    dayjs.locale(this.translateService.currentLang)
    return dayjs(time).fromNow()
  }

  onNewDate(event: any){
    this.campaignService.updateCampaignDate(this.campaign.id, new Date(event.year, event.month-1, event.day).getTime())
  }

  openModal(content: any){
    this.modalService.open(content, {size: 'sm'});
  }

  getWeekdayShortName(){
    return 'Mon'
  }

}
