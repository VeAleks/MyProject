import {trigger, state, style, animate, transition, sequence,  query, stagger, group } from '@angular/animations';

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

export const showBlockTrigger = trigger('block', [
  transition(':enter', [ // each time the binding value changes
    query('h1, img, button', style({ opacity: 0 })),
    query('h1, img, button', [
      stagger(300, [
        animate('0.3s', style({ opacity: 1 })),
      ]), 
    ]),
  ])
])

export const fadeEffectTrigger = trigger('fadeEffect', [
  transition(':enter', [
    style({ 
      opacity: 0,
    }),
    animate(400)
  ]),
  transition(':leave', [
    animate(400, style({
      opacity: 0,
    }))
  ])
])

export const slideEffectTrigger = trigger('slideEffect', [
  transition(':enter', [
    style({ 
      height: 0,
      overflow: "hidden"
    }),
    animate(400, style({ 
      height: '*',
    })),
  ]),
  transition(':leave', [
    style({ 
      height: '*',
      overflow: 'hidden'
    }),
    animate(400, style({
      height: 0,
    }))
  ])
]);
export const fadeModalEffectTrigger = trigger('fadeModalEffect', [
  transition(':enter', [
    style({ 
      opacity: 0,
    }),
    animate(400)
  ]),
  transition(':leave', [
    animate(400, style({
      opacity: 0,
    }))
  ])
])
export const zomeModalEffectTrigger = trigger('zomeModalEffect', [
  transition(':enter', [
    style({ 
      transform: 'scale(0)',
    }),
    animate(400, style({
      transform: 'scale(1)',
    }))
  ]),
  transition(':leave', [
    animate(400, style({
      transform: 'scale(0)',
    }))
  ])
])