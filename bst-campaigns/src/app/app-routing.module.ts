import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { CampaignTypes } from './app.types';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaingGuard } from './guards/campaign.guards';

const routes: Routes = [
  { path: 'campaigns/:type', component: CampaignListComponent, canActivate: [CampaingGuard] },
  { path: '**', redirectTo: 'campaigns/upcoming'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
