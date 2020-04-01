import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { NgForm, FormArray } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';
import {FormGroup} from '@angular/forms'
import { Option } from '../option';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User();
  currentUser: User = new User();
  isValid: boolean = true;
  reset: boolean = false;
  planId: number;
  subscription: Subscription;
 @Input() planHasOptions:boolean;
 @Input() planOptions:FormGroup; 
 @Output() submitted = new EventEmitter();
  constructor(private sharedService: SharedService) {
    this.subscription = this.sharedService.planId$.subscribe(
      planId => {
        this.planId = planId
      }
    )
  }
  onSubmit(form: NgForm) {
    this.isValid = form.valid;
    if (this.isValid) {
      this.currentUser.plan.id = this.planId;
      this.currentUser.firstName = this.user.firstName.trim();
      this.currentUser.lastName = this.user.lastName.trim();
      this.currentUser.email = this.user.email.trim();
      this.addPlanOptions(this.planOptions)
      console.log(this.currentUser)
      form.reset()
      this.submitted.emit(this.isValid)
      this.reset = !this.reset;
    }
  }

  addPlanOptions(planOptions:FormGroup){
   
    if(this.planHasOptions){
      this.currentUser.plan.options=[]
    const po = Object.entries(planOptions.controls)
     po.forEach((e)=>{
      let option = new Option();
       if(e[0]==="type"){
        option.id=e[1].value;
        this.currentUser.plan.options.push(option)
       }else{
         if(e[1].value.articles.length>0){
          option.id=e[1].value.id;
          option.articles = e[1].value.articles;
          this.currentUser.plan.options.push(option)
         }
       }
     })
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
