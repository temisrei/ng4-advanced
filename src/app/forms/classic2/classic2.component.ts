import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
      title: ['Hello',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      subtitle: this.fb.control('World')
    })
  }

  doSubmit() {
    console.log(this.form);
  }

}
