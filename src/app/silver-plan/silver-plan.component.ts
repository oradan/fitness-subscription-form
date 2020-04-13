import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-silver-plan',
  templateUrl: './silver-plan.component.html',
  styleUrls: ['./silver-plan.component.css']
})
export class SilverPlanComponent implements OnInit {
  offers;
  responsiveOptions;
  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.offers = this.dataService.getAllOffers();
    this.responsiveOptions = [
      {
          breakpoint: '510px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '410px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

}
