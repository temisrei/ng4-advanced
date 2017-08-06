import { Directive, HostListener, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPlusone]'
})
export class PlusoneDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    console.log('OnInit called');
    this.html = this.el.nativeElement.innerHTML;
    console.log(this.el.nativeElement);
  }

  // <button>{{ counter }}</button>
  // [innerHTML]="html"
  @HostBinding('innerHTML')
  html: string;

  // (click)="addCounter()"
  @HostListener('click',[])
  addCounter() {
    let counter = +this.html; // 轉型
    counter++;
    this.html = counter.toString(); // 轉型賦值
  }



}
