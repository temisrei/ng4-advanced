import { Component, OnInit } from '@angular/core';
import { FlotCharts } from './ini-flotcharts';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(FlotCharts);

  }

  debug() {
    console.log(new Date());
  }
}
