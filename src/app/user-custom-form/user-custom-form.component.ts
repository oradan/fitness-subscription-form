import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-user-custom-form',
  templateUrl: './user-custom-form.component.html',
  styleUrls: ['./user-custom-form.component.css']
})
export class UserCustomFormComponent implements OnInit {
  user:User = new User();
  customPlan:Plan;
  constructor(public dataService:DataService) { }

  ngOnInit() {
    this.customPlan=this.dataService.getPlanByName("custom");
  }

}
