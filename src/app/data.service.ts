import { Injectable } from '@angular/core';
import { PLANS } from './data'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  plans = PLANS
  constructor() { }

  getAllPlans() {
    return this.plans
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
