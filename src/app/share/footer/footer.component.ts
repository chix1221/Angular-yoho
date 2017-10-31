import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public returnUp(event): void {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
}
