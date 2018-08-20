import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    // trigger('list', [
    //   state('red', style({
    //     color: '#f00'
    //   })),
    //   state('blue', style({
    //     color: '#00f'
    //   })),
    //   transition(':enter', [
    //     style({
    //       transform: 'translateX(-40%)',
    //       opacity: 0
    //     }),
    //     animate(500)
    //   ]),
    //   transition('*=>*', animate(500))
    // ]),
    trigger('block', [
      transition('* => *', [ // each time the binding value changes
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ]),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  list;
  block;
  go() {
    this.list = 'red';
  }
  stop() {
    this.list = 'blue';

  }
  remove(e) {
    
  }
  ngOnInit() {

  }
}
