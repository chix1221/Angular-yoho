import { Component } from '@angular/core';
import {ChangeClassService} from '../../myServices';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
  providers: [ChangeClassService],
})
export class TaskbarComponent {
  localUrl: string;
  constructor(private  changeClass: ChangeClassService) {
    this.localUrl = this.changeClass.getUrl();
    // this.boys.nativeElement.style.backgroundColor='#fff';
  }

}
