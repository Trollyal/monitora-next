import demographics from './demographics.json'
import { Demographics } from './types'

export const loadDemographics = async (): Promise<Demographics>  => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(demographics), 1000)
  })
}