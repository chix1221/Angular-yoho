import { Component} from '@angular/core';
import {ChangeClassService} from '../myServices';
@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css'],
  providers: [ChangeClassService],
})
export class LifestyleComponent {
  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }
}


