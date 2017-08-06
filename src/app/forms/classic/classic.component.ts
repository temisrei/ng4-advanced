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
    'subtitle': 'World',
    'address': ['Taipei','Kaohsiung','Taichung']
  };

  // 專門給 ngFor 用的陣列屬性
  get data_address_len() {
    return new Array(this.data.address.length);
  }

  constructor() { }

  ngOnInit() {
  }

  setDisabled(ctl: NgModel) {
    // console.log(ctl);
    ctl.control.disable();
  }

  doSubmit(event, f) {
    // console.log(event);
    // console.log(f);
  }

  addAddress() {
    let len = this.data.address.length;
    this.data.address.push(len);
  }

}
