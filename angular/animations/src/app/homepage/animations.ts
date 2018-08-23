import {trigger, state, style, animate, transition, sequence,  query, stagger, keyframes, group } from '@angular/animations';


export const showListTrigger = trigger('list', [

  state('listOpacity', style({
    opacity: 0.5
  })),
  state('default', style({
    opacity: 1
  })),
  transition('default<=>listOpacity', animate(300))
])

export const showBlockTrigger = trigger('block', [
  transition(':enter', [ 
    query('h1', style({
      transform: 'translateY(-50px)',
      opacity: 0
    })),
     query('h2', style({
      transform: 'translateY(-30px)',
      opacity: 0
    })),
    query('img', style({
      opacity: 0,
      transform: 'scale(0.7)' 
    })),
    query('button.left', style({
      opacity: 0,
      transform: 'translateX(-80px)'
    })),
    query('button.right', style({
      opacity: 0,
      transform: 'translateX(80px)'
    })),
    query('h1', [
      stagger(200, [ animate(300)]),
    ]),
    group([
      query('img', animate(600, keyframes([
          style({ transform: 'scale(1.1)', opacity: 1 , offset: 0.4}),
          style({ transform: 'scale(0.8)' , offset: 0.7}),
          style({ transform: 'scale(1)' , offset: 1})
        ])
      )),
      query(' h2', [
        stagger(300, [ animate(300)])
      ])
    ]),
    group([
      query('button.right', animate(400, keyframes([
         style({ transform: 'translateX(10px)', opacity: 1, offset: 0.7}),
         style({ transform: 'translateX(-20px)', offset: 0.75}),
         style({ transform: 'translateX(10px)', offset: 0.9}),
         style({ transform: 'translateX(-5px)', offset: 0.95}),
         style({ transform: 'translateX(0)', offset: 1})
      ]))),
      query('button.left', animate(400, keyframes([
        style({ transform: 'translateX(10px)', opacity: 1, offset: 0.7}),
         style({ transform: 'translateX(20px)', offset: 0.75}),
         style({ transform: 'translateX(-10px)', offset: 0.9}),
         style({ transform: 'translateX(5px)', offset: 0.95}),
         style({ transform: 'translateX(0)', offset: 1})
      ]))),
    ])
  ]),
  transition(':leave', [ 
    group([
      query('button.right', animate(300, style({
        opacity: 0,
        transform: 'translateX(80px)'
      }))),
      query('button.left', animate(300, style({
        opacity: 0,
        transform: 'translateX(-80px)'
      })))
    ]),
    query('ul h2', [
      stagger(200,  animate(300, style({
        transform: 'translateY(100px)',
        opacity: 0
      })))
    ])
    group([
      query('img', animate(300, keyframes([
          style({ transform: 'scale(0.5)', opacity: 1 , offset: 0.5}),
          style({ transform: 'scale(0)' , opacity: 0,  offset: 1})
        ])
      )),
      query('h2', [
        animate(300, style({
          transform: 'translateY(100px)',
          opacity: 0
        }))
      ])
    ]),
    query('h1', animate(300, style({
      transform: 'translateY(150px)',
      opacity: 0
    })))
  ])
])
