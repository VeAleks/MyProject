import { Component, OnInit, HostBinding } from '@angular/core';
import { pageAnimationTrigger, showListTrigger, showBlockTrigger } from '../animations';
import {AnimationBuilder} from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    pageAnimationTrigger,
    showListTrigger,
    showBlockTrigger
  ]
})
export class HomepageComponent implements OnInit {
  @HostBinding('@routerAnimation') routerAnimation = true;
  title = 'app';
  list;
  blockAnimation: any = 'sd';
  go() {
    this.list = 'red';
  }
  stop() {
    this.list = 'blue';
  }
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        console.log(this) 
        this.blockAnimation = 'init'

      } else return;
    })
  }

  ngOnInit() {
  console.log()
  }

}
