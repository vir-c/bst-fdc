import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CampaignItemComponent } from './components/campaign-item/campaign-item.component';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignItemComponent,
    CampaignListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
