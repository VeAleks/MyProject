import { Component } from '@angular/core';
// import { trigger, state, style, animate, transition, query, stagger } from '@angular/animations';
import { showListTrigger, showBlockTrigger, fadeEffectTrigger, slideEffectTrigger, fadeModalEffectTrigger, zomeModalEffectTrigger} from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    showListTrigger,
    showBlockTrigger,
    fadeEffectTrigger,
    slideEffectTrigger,
    fadeModalEffectTrigger,
    zomeModalEffectTrigger
  ]
})
export class AppComponent  {
  title = 'app';
  list;
  block;
  showSlideIs: boolean = false;
  showFadeIs: boolean = false;
  overlayFlag: boolean = false;
  fadeModalFlag: boolean = false;
  zoomModalFlag: boolean = false;
  zoom2ModalFlag: boolean = false;
  slideModalFlag: boolean = false;
  go() {
    this.list = 'red';
  }
  stop() {
    this.list = 'blue';
  }
  closeModal(modal) {
    overlayFlag = false;
  }
  openModal(e) {
    console.log(e)

    // e.flag = true;
  }
  openFadeModal(){
  }



}
