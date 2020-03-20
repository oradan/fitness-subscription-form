import { Component, OnInit } from '@angular/core';
import { Plan } from './plan';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'fitness-subscription';
  plans: Plan[];
  selectedPlan: Plan;
  constructor(public dataService: DataService) { }
  setSelectedPlan(plan: Plan) {
    this.selectedPlan = plan;
  }

  ngOnInit(): void {
    this.plans = this.dataService.getAllPlansId();
    this.selectedPlan = this.plans[2]
    console.log(this.plans)
  }
}
