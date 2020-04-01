import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Option } from '../option';
import { FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-custom-plan',
  templateUrl: './custom-plan.component.html',
  styleUrls: ['./custom-plan.component.css']
})
export class CustomPlanComponent implements OnInit {
  optionType: Option;
  optionClasses: Option;
  optionAccesses: Option;
  optionPeronalTrainer: Option;
  planOptions: FormGroup;
  planHasOptions: boolean = true;
  price: number;
  prevPrice: number;

  constructor(public dataService: DataService, private fb: FormBuilder) { }
  onCheckboxChange(option, e, price) {
    const optionArticles = this.planOptions.get([option, 'articles']) as FormArray
    if (e.target.checked) {
      optionArticles.push(new FormControl(e.target.value))
      this.price += price
    } else {
      let index = optionArticles.value.findIndex((i) => i === e.target.value)
      optionArticles.removeAt(index)
      this.price -= price
    }
  }
  onRadioBoxChange(price: number) {
    this.price = this.price - this.prevPrice + price
    this.prevPrice = price
  }
  resetPlanOptions(submitted: boolean) {
    if (submitted) {
    }
  }
  ngOnInit() {
    this.optionType = this.dataService.getOptionByName('type');
    this.optionClasses = this.dataService.getOptionByName('classes');
    this.optionAccesses = this.dataService.getOptionByName('accesses');
    this.optionPeronalTrainer = this.dataService.getOptionByName('personalTrainer');
    this.price = this.optionType.articles[0].price;
    this.prevPrice = this.price;
    this.planOptions = this.fb.group({
      type: [this.optionType.articles[0].id],
      classes: this.fb.group({
        id: [this.optionClasses.id],
        articles: this.fb.array([])
      }),
      accesses: this.fb.group({
        id: [this.optionAccesses.id],
        articles: this.fb.array([])
      }),
      peronalTrainer: this.fb.group({
        id: [this.optionPeronalTrainer.id],
        articles: this.fb.array([])
      })
    })

  }

}
