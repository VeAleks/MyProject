import {trigger, state, style, animate, transition, sequence,  query, stagger, group } from '@angular/animations';


let optionsHidePage = { 
  position: 'fixed',
  width: '100%',
  background: 'white',
  transform: 'translateX(100%)'
};
let optionsShowPage = { 
  position: 'fixed',
  width: '100%',
  background: 'white',
  transform: 'translateX(0)'
};

export const pageAnimationTrigger = trigger('routerAnimation', [
  transition(':enter', [
    style(optionsHidePage),
    animate('0.5s', style(optionsShowPage))
  ]),
  transition(':leave', [
    style(optionsShowPage),
    animate('0.5s ease-in-out', style(optionsHidePage))
  ])
])


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
  transition('*=>init', [ // each time the binding value changes
    query('h1, img, button', style({ opacity: 0 })),
    query('h1, img, button', [
      stagger(300, [ animate('0.3s 2s', style({ opacity: 1 })) ]), 
    ]),
  ])
])

export const fadeEffectTrigger = trigger('fadeEffect', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400)
  ]),
  transition(':leave', [
    animate(400, style({ opacity: 0, }))
  ])
])

export const slideEffectTrigger = trigger('slideEffect', [
  transition(':enter', [
    style({ 
      height: 0,
      overflow: "hidden",
    }),
    animate(400, style({ height: '*' }))
  ]),
  transition(':leave', [
    style({ 
      height: '*',
      overflow: 'hidden',
    }),
    animate(400, style({ height: 0, }))
  ])
]);
export const fadeModalEffectTrigger = trigger('fadeModalEffect', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(400)
  ]),
  transition(':leave', [
    animate(400, style({ opacity: 0 }))
  ])
])
export const zomeModalEffectTrigger = trigger('zomeModalEffect', [
  transition(':enter', [
    style({ transform: 'scale(0)' }),
    animate(400, style({ transform: 'scale(1)' }))
  ]),
  transition(':leave', [
    animate(400, style({ transform: 'scale(0)' }))
  ])
])