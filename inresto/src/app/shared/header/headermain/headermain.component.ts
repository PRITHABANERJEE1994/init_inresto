import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-headermain',
  templateUrl: './headermain.component.html',
  styleUrls: ['./headermain.component.scss']
})
export class HeadermainComponent implements OnInit, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }
  ngDoCheck() {
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }

  onButtonClick(){
    alert("button clicked");
  }

}
