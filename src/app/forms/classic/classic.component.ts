import { Component, OnInit } from '@angular/core';
import { NgModel } from "@angular/forms/forms";


@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.css']
})
export class ClassicComponent implements OnInit {
  data: any = {
    'title': 'Hello',
    'subtitle': 'World'
  };

  constructor() { }

  ngOnInit() {
  }

  setDisabled(ctl: NgModel) {
    // console.log(ctl);
    ctl.control.disable();
  }

}
