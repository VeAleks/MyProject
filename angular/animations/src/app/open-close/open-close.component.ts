import { Component, OnInit, HostBinding } from '@angular/core';
import { pageAnimationTrigger, fadeEffectTrigger, slideEffectTrigger } from '../animations';
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
     this.data = this.openCloseService.items;
     console.log(this.data);
  }
  openSlide(e, a) {
    // let flag = false;
    // flag = !flag;
    console.log(e);
    console.log(this.data[e].flag);
    this.data[e].flag = !this.data[e].flag;
  }
  clickItem(e, item) {
    console.log(e, item);
  }

}
