import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  title = 'Sky Red';

  @ViewChild('titleElement') titleElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('BlockComponent AfterViewInit called');
    console.log(this.titleElement.nativeElement.innerHTML);
  }

}
