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
    query('ul h3', style({
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
      stagger(200, [ animate('.3s cubic-bezier(0.250, 0.460, 0.450, 0.940)')]),
    ]),
    group([
      query('img', animate('.6s ease-out', keyframes([
          style({ transform: 'scale(1.1)', opacity: 1 , offset: 0.4}),
          style({ transform: 'scale(0.8)' , offset: 0.7}),
          style({ transform: 'scale(1)' , offset: 1})
        ])
      )),
      query('h2', animate('.3s ease-out'))
    ]),
    query('ul h3', [
      stagger(200, [ animate('.3s ease-out')])
    ]),
    group([
      query('button', animate('.4s cubic-bezier(0.175, 0.885, 0.320, 1.275)',
          keyframes([
            style({ opacity: 1, offset: 0.3}),
            style({ transform: 'translateX(0)', offset: 1})
          ])
      ))
    ])
  ]),
  transition(':leave', [ 
    group([
      query('button.right', animate('.3s ease-in', style({
        opacity: 0,
        transform: 'translateX(80px)'
      }))),
      query('button.left', animate('.3s ease-in', style({
        opacity: 0,
        transform: 'translateX(-80px)'
      })))
    ]),
    query('ul h3', [
      stagger(200,  animate('.3s cubic-bezier(0.550, 0.085, 0.680, 0.530)', style({
        transform: 'translateY(100px)',
        opacity: 0
      })))
    ]),
    group([
      query('img', animate('.3s ease-in', keyframes([
          style({ transform: 'scale(0.5)', opacity: 1 , offset: 0.5}),
          style({ transform: 'scale(0)' , opacity: 0,  offset: 1})
        ])
      )),
      query('h2', [
        animate('.3s ease-in', style({
          transform: 'translateY(100px)',
          opacity: 0
        }))
      ])
    ]),
    query('h1', animate('.3s ease-in', style({
      transform: 'translateY(150px)',
      opacity: 0
    })))
  ]),
])
