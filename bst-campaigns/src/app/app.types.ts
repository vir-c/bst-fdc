export type Campaign = {
  id: string
  timestamp: number,
  title: string,
  img: string,
  countryCode: string
}

export enum CampaignTypes{
  UPCOMING = "upcoming",
  PAST = "past",
  LIVE = "live",
}