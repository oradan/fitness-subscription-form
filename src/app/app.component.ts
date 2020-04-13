import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plan } from './plan';
import { DataService } from './data.service';
import { SharedService } from './shared.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'fitness-subscription';
  plans: Plan[];
  selectedPlan: Plan;
  defaultPlanId: number;
  subscription: Subscription
  constructor(public dataService: DataService, public sharedService: SharedService) {
    this.subscription=this.sharedService.planId$.subscribe(
      (planId) => {
        this.defaultPlanId = planId;
      }
    )
  }
  value(plan:Plan){
    console.log(plan)
  }
  setSelectedPlan(planId: Plan) {
    this.selectedPlan = this.plans.find((e)=>e.id===+planId)
    this.sharedService.setPlanId(+planId)
  }
  
  ngOnInit(): void {
    this.plans = this.dataService.getAllPlans();
    this.selectedPlan = this.plans.find(e => e.id === this.defaultPlanId)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
