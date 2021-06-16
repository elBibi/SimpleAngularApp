import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  hits = 10;
  constructor() { }

  ngOnInit(): void {
  }

  incrementHitCounter(){
    console.log("page2.component.ts ->incrementHitCounter");
    this.hits++;
  }
}
