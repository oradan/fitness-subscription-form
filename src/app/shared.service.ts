import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private planId = new BehaviorSubject(this.dataServive.defaultPlanId());

  planId$ = this.planId.asObservable();

  setPlanId(id){
    this.planId.next(id)
  }

  constructor(public dataServive:DataService) { 

  }

}
