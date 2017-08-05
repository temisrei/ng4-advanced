import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  type: number = 0;
  action1: string = '';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //僅初始值
    // this.type = this.route.snapshot.params['type'];

    //透過 params 這個 Observable 物件來取得參數值
    //由於是 Observable 所以要用 subscribe 訂閱
    this.route.params.subscribe(params => {
      this.type = params['type'];
      //增加 可選的路由矩陣參數
      this.action1 = params['action'];
    })

  }

}
