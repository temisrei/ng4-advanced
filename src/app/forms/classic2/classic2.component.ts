import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from "@angular/forms";

@Component({
  selector: 'app-classic2',
  templateUrl: './classic2.component.html',
  styleUrls: ['./classic2.component.css']
})
export class Classic2Component implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: ['Hello', [
          Validators.required,
          Validators.minLength(3)
        ]],
      group1: this.fb.group({
        subtitle: ['World', [
          Validators.required,
          Validators.pattern('\\d+')
        ]]
      }),
      addresses: this.fb.array([
        this.fb.control('Taipei'),
        this.fb.control('Kaohsiung')
      ])
    })
  }

  doSubmit() {
    console.log(this.form);
  }

  addAddress() {
    // this.form.get('addresses').controls 要做轉型
    let addresses = (this.form.get('addresses') as FormArray);
    addresses.push(this.fb.control('New address', [
      Validators.required
    ]));
  }

}
