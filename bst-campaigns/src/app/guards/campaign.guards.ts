import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CampaignTypes } from "../app.types";

@Injectable({
  providedIn: 'root'
})
export class CampaingGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    for(let type in CampaignTypes){
      const campaign: CampaignTypes = CampaignTypes[type as keyof typeof CampaignTypes]
      if(campaign ==route.params.type)
        return true
    }
    return this.router.navigate(["campaigns/upcoming"])
  }
}