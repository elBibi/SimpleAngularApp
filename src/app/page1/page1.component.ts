import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  pageName ='Page 1 Mik';

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{this.pageName='First Page'},5000);
    setTimeout(()=>{this.pageName='First Page Timeout 2'},10000);
    setTimeout(()=>{this.pageName='First PageTimeout 3'},15000);
  }

  onButtonClick(){
    alert('Today is:'+new Date());
  }

}
