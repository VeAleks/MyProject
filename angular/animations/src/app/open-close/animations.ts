import { trigger, style, animate, transition } from '@angular/animations';

let duration = 250;

export const fadeEffectTrigger = trigger('fadeEffect', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate(duration)
  ]),
  transition(':leave', [
    animate(duration, style({ opacity: 0, }))
  ])
])

export const slideEffectTrigger = trigger('slideEffect', [
  transition(':enter', [
    style({ 
      height: 0,
      overflow: "hidden",
    }),
    animate(duration, style({ height: '*' }))
  ]),
  transition(':leave', [
    style({ 
      height: '*',
      overflow: 'hidden',
    }),
    animate(duration, style({ height: 0, }))
  ])
]);