import { Component} from '@angular/core';
import {ChangeClassService} from '../myServices';
@Component({
  selector: 'app-boys',
  templateUrl: './boys.component.html',
  styleUrls: ['./boys.component.css'],
  providers: [ChangeClassService],
})
export class BoysComponent {

  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }

}
