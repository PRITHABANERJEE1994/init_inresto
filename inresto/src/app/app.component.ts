import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { DataService, PageType } from './data.service';
import { LoggerService } from './logger.service';

//our components


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'inresto';
  constructor(public logger: LoggerService, private router: Router, public data: DataService, private location: Location) {
    this.location.replaceState('/'); // clears browser history so they can't navigate with back button
    if(this.data.getPageType() == PageType.JOIN_PAGE){
      this.router.navigateByUrl('join-inresto');
    }else{
      this.router.navigateByUrl('welcome');
    }
  }
  ngOnChanges(){
  }
  ngOnInit(){
  }
  ngDoCheck(){
  }
  ngAfterContentInit(){
  }
  ngAfterContentChecked(){
  }
  ngAfterViewInit(){
  }
  ngAfterViewChecked(){
  }
  ngOnDestroy(){
  }
}
