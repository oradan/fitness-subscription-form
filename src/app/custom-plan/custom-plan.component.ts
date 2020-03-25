import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Option } from '../option';

@Component({
  selector: 'app-custom-plan',
  templateUrl: './custom-plan.component.html',
  styleUrls: ['./custom-plan.component.css']
})
export class CustomPlanComponent implements OnInit {
 optionType: Option;
 optionClasses: Option;
 optionAccesses: Option;
 optionPeronalTrainer:Option;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.optionType=this.dataService.getOptionByName('type');
    this.optionClasses=this.dataService.getOptionByName('classes');
    this.optionAccesses= this.dataService.getOptionByName('accesses');
    this.optionPeronalTrainer=this.dataService.getOptionByName('personalTrainer');
  }

}
