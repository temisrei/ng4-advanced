import { Component, OnInit, NgZone } from '@angular/core';
import { FlotCharts } from './ini-flotcharts';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor(private zone: NgZone) { }

  ngOnInit() {
    // 把 Code 跑在 Angular 之外
    this.zone.runOutsideAngular(() => {
      $(FlotCharts);
      console.log("FlotChart called once");
    });

  }

  debug() {
    console.log(new Date());
  }
}
