import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
/*
ngAfterViewInit() is called once after ngAfterContentChecked

ngAfterViewInit() is called after all child components are initialized and checked.

In the example above, ngAfterViewInit() gets called one time after ngDoCheck.

Triggering the clickMe() function WILL NOT trigger ngAfterViewInit().

When should you use ngAfterViewInit?
ngAfterViewInit is useful when you want to call a lifecycle hook after all child components have been initialized and checked.
*/
  constructor() { }

  ngOnInit() {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterViewInit(){
    console.log("after view init")
  }
  clickMe(){
    console.log("link clicked")
  }

}
