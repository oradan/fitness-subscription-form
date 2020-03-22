import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Subscription } from 'rxjs';

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
      console.log(this.currentUser)
      form.reset()
      this.reset = !this.reset;
    }
  }
  ngOnInit() {
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
