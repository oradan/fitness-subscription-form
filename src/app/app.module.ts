import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCustomFormComponent } from './user-custom-form/user-custom-form.component';
import { DefaultPlanComponent } from './default-plan/default-plan.component';
import { SilverPlanComponent } from './silver-plan/silver-plan.component';
import { GoldPlanComponent } from './gold-plan/gold-plan.component';
import { CustomPlanComponent } from './custom-plan/custom-plan.component';
import { FloatinLabelsDirective } from './floatin-labels.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserCustomFormComponent,
    DefaultPlanComponent,
    SilverPlanComponent,
    GoldPlanComponent,
    CustomPlanComponent,
    FloatinLabelsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
