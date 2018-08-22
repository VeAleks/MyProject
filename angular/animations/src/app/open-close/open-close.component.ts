import { Component, OnInit, HostBinding } from '@angular/core';
import { pageAnimationTrigger, fadeEffectTrigger, slideEffectTrigger } from '../animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    pageAnimationTrigger,
    fadeEffectTrigger,
    slideEffectTrigger
  ]
})
export class OpenCloseComponent implements OnInit {
  @HostBinding('@routerAnimation') routeAnimation = true;
  showSlideIs: boolean = false;
  showSlideIs2: boolean = false;
  showFadeIs: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }
  openSlide(e) {
    let flag = false;
    flag = !flag;
    console.log(e);
  }

}
