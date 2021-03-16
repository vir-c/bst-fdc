import { Component, Input, OnInit } from '@angular/core';
import { Campaign } from 'src/app/app.types';
import * as dayjs from 'dayjs';
import * as relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

@Component({
  selector: 'app-campaign-item',
  templateUrl: './campaign-item.component.html',
  styleUrls: ['./campaign-item.component.scss']
})
export class CampaignItemComponent implements OnInit {

  @Input() campaign: Campaign | undefined;

  constructor() { }

  ngOnInit(): void {
    
  }

  public getPassedTime(time: number | undefined){
    if(!time) return ""
    else return dayjs(time).fromNow()
  }

}
