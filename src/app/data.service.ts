import { Injectable } from '@angular/core';
import { DATA } from './data'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  plans = DATA.plans
  constructor() { }

  getAllPlans() {
    return this.plans
  }
  defaultPlanId(){
    return DATA.defaultPlanId
  }
  getPlanByName(planName: string) {
    return this.plans.find(e => e.name === planName);
  }

 getAllPlansId(){
   return this.plans.map(e=>{
    return {id:e.id,name:e.name}
   })
 }
}
