import { Component, OnInit, Injectable, HostBinding } from '@angular/core';
import { pageAnimationTrigger, fadeEffectTrigger, fadeModalEffectTrigger, zomeModalEffectTrigger} from '../animations';
import { ModalService } from './modal.service';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss'],
  animations: [
    fadeEffectTrigger,
    fadeModalEffectTrigger,
    zomeModalEffectTrigger,
    pageAnimationTrigger
  ],
  providers: [ModalService]
})
export class ModalsComponent implements OnInit {
  @HostBinding('@routerAnimation') routeAnimation = true;
  overlayFlag: boolean = false;
  fadeModalFlag: boolean = false;
  zoomModalFlag: boolean = false;
  zoom2ModalFlag: boolean = false;
  slideModalFlag: boolean = false;
  data: any;

  constructor(private modalService: ModalService ) { }

  ngOnInit() {
    console.log(this.modalService)
    this.data = this.modalService;
  }

  closeModal(modal) {
    this.overlayFlag = false;
  }
  openModal(e) {
  }
  openFadeModal(){
  }

}
