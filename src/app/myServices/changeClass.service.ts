import { Injectable } from '@angular/core';
import { Component , OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params , CanActivate} from '@angular/router';

@Injectable()
export class ChangeClassService implements OnInit {
  localUrl : string;
  tab_class:string;
  constructor(private activatedRoute: ActivatedRoute) {}
  getParams(): void {
    // 获取路由参数
    // http://localhost:4201/post?id=12&name=zhangsan
    // this.activatedRoute.params
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // let userId = params['userId'];
      console.log(params);
    });
  }
  isContains(str, substr): any {
    return str.indexOf(substr) >= 0;
  }
  getUrl(): any {
    if(this.isContains(location.href,'boys')){
      this.tab_class ='#000';
    }else if(this.isContains(location.href,'girls')){
      this.tab_class ='#ff88ae';
    }else if(this.isContains(location.href,'kids')){
      this.tab_class ='#7bd3f9';
    }else if(this.isContains(location.href,'lifestyle')){
      this.tab_class ='#5e4b3c';
    }else if(this.isContains(location.href,'user')){
      this.tab_class ='user';
    }
    return this.tab_class;
  }
  ngOnInit(){
    this.getParams();
    this.localUrl =  this.getUrl();
  }
}
