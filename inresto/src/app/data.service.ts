import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

export class PageType {
  static LOGIN_PAGE = 0;
  static JOIN_PAGE = 1;
  static WELCOME_PAGE = 2;
}




@Injectable({
  providedIn: 'root'
})
export class DataService {

  static dataService: DataService;
  pageType = PageType.JOIN_PAGE;
  menuIndex = 1;
  submenuIndex = 101;
  constructor(public http: HttpClient, public logger: LoggerService) {

    DataService.dataService = this;
   }
   static getDataService(){
     return DataService.dataService;
   }
   public setLeftMenuIndex(index){
     this.menuIndex = index;
   }
   public getLeftMenuIndex(){
     return this.menuIndex;
   }

   public setPageType(pagetype){
     this.pageType = pagetype;
   }
   public getPageType(){
    return this.pageType;
   }

   public getResponseForUrl(getUrl) : Observable <HttpResponse<any>>{
     return this.http.get<any>(
       getUrl, {observe : 'response'}
     )
   }

   public setLeftSubMenuIndex(index){
    this.submenuIndex = index;
  }
  public getLeftSubMenuIndex(){
    return this.submenuIndex;
  }
   
}
