import { Component} from '@angular/core';
import {ChangeClassService} from '../myServices';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css'],
  providers: [ChangeClassService],
})
export class KidsComponent {
  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }

}
