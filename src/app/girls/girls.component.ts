import { Component} from '@angular/core';
import {ChangeClassService} from '../myServices';
@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css'],
  providers: [ChangeClassService],
})
export class GirlsComponent {


  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }

}
