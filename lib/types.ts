export interface DemographicItem {
  label: string
  percent: number
  percent_avg: number
}

export interface Demoraphic {
  label: string
  items: DemographicItem[]
}
  
export interface Demographics {
  data: Demoraphic[]
  title: string
  subtitle: string
}

export enum Filter {
  ALL = 'ALL',
  ABOVE_AVERAGE = 'ABOVE_AVERAGE',
  BELOW_AVERAGE = 'BELOW_AVERAGE',
}

export enum Rating {
  AVERAGE = 'AVERAGE',
  ABOVE_AVERAGE = 'ABOVE_AVERAGE',
  BELOW_AVERAGE = 'BELOW_AVERAGE',
}

export interface RatedItems {
  label: string
  percentage: number
  rating: Rating
}
