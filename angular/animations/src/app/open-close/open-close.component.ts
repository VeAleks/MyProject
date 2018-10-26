import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { pageAnimationTrigger } from '../page-animations';
import { fadeEffectTrigger, slideEffectTrigger } from './animations';
import { OpenCloseService } from './open-close.service';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    pageAnimationTrigger,
    fadeEffectTrigger,
    slideEffectTrigger
  ],
  providers: [OpenCloseService]
})
export class OpenCloseComponent implements OnInit {
  @HostBinding('@routerAnimation') routeAnimation = true;
  showSlideIs: boolean = false;
  showFadeIs: boolean = false;
  data: any[];


 
  constructor(private openCloseService: OpenCloseService) { }

  ngOnInit() {
    console.log(this)
     this.data = this.openCloseService.items;

  }

  @HostListener('click') onClickEnter() {
      console.log(this)
  }
}
