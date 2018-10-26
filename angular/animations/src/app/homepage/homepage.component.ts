import { Component, OnInit, HostBinding } from '@angular/core';
import { pageAnimationTrigger} from '../page-animations';
import { showListTrigger, showBlockTrigger } from './animations';
import {AnimationBuilder} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    pageAnimationTrigger,
    showListTrigger,
    showBlockTrigger,
  ],
  host: { '(@routerAnimation.done)': 'routerAnimationEnd($event)' }
})
export class HomepageComponent implements OnInit {
  @HostBinding('@routerAnimation') routerAnimation = true;
  title = 'app';
  list;
  listState = false;
  isLoadHomepage = false;
  blockAnimation: any = 'sd';
  blockState = false;
  buttonState = false;


  
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
         console.log(val);
      } else return;
    })
  }

  ngOnInit() {
  }
  toggleButtonState() {
    this.buttonState = !this.buttonState;
  }
  startAnimation() {
    this.blockState = true;
    this.toggleButtonState();
  }
  backAnimation() {
    this.blockState = false;
    this.toggleButtonState();
  }
  resetColor() {
    this.list = 'default';
  }
  startListAnimation() {
    this.list = 'listOpacity';
  }
  routerAnimationEnd(e) {
    setTimeout(()=> { this.blockState = true } , 300)
  }

}
