import { Component, Input, Output, Inject } from '@angular/core';
import { WINDOW } from './window.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  event: any;

  clickFromAnchor(e) {
    this.event = e;
  }
  constructor(@Inject(WINDOW) private window: Window) {
  }

  slideTo(offset) {
    var isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    alert(isSmoothScrollSupported)
    this.window.scrollTo({
      top: offset,
      behavior: "auto"
    });
  }

}
