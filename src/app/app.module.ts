import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';

import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserCustomFormComponent } from './user-custom-form/user-custom-form.component';
import { DefaultPlanComponent } from './default-plan/default-plan.component';
import { SilverPlanComponent } from './silver-plan/silver-plan.component';
import { GoldPlanComponent } from './gold-plan/gold-plan.component';
import { CustomPlanComponent } from './custom-plan/custom-plan.component';
import { FloatinLabelsDirective } from './floatin-labels.directive';
import { RemoveinnerlinePipe } from './removeinnerline.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserCustomFormComponent,
    DefaultPlanComponent,
    SilverPlanComponent,
    GoldPlanComponent,
    CustomPlanComponent,
    FloatinLabelsDirective,
    RemoveinnerlinePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
