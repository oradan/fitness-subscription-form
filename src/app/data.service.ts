import { Injectable } from '@angular/core';
import { DATA } from './data'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  plans = DATA.plans
  options = DATA.options
  offers = DATA.offers
  constructor() {}

  defaultPlanId() {
    return DATA.defaultPlanId
  }
  getPlanByName(planName: string) {
    return this.plans.find(e => e.name === planName);
  }

  getAllPlans() {
    return this.plans
  }
  getAllOptions(){
    return this.options
  }
  getOptionByName(name:string){
    return this.options[name]
  }
  getAllOffers(){
    return this.offers
  }
}
