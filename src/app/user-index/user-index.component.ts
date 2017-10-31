import { Component } from '@angular/core';
import {ChangeClassService} from '../myServices';

@Component({
  selector: 'user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css'],
  providers: [ChangeClassService],
})
export class UserIndexComponent {
  title = 'app';
  geturl: string;
  constructor(private  changeClass: ChangeClassService ){
    this.geturl = this.changeClass.getUrl();
    console.log(this.changeClass.getUrl());
    console.log('my service is working' + this.geturl);
  }
}
