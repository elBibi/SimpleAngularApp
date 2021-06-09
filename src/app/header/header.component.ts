import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  pageRequested =2;

  ngOnInit(): void { }


  // @ts-ignore
  onPageChange(page){
    this.pageRequested=page;
    console.log(this.pageRequested);
  }

}
