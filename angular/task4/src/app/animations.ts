import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

export const showListTrigger = trigger('list', [
  state('red', style({
    color: '#f00'
  })),
  state('blue', style({
    color: '#00f'
  })),
  transition(':enter', [
    style({ opacity: 0}),
    animate('0.3s')
  ]),
  transition('*=>*', animate(500))
])
