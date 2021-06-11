import {EventEmitter, Output, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }
  pageRequested =1;

  @Output()
  pageChangedEvent= new EventEmitter<number>();

  ngOnInit(): void { }
  // @ts-ignore
  onPageChange(page){
    this.pageRequested=page;
    console.log(this.pageRequested);
    //fired event Modify page 2
    this.pageChangedEvent.emit(page);
  }

}
