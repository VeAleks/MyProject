import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

@Component({
	selector: 'app-main-nav',
	templateUrl: './main-nav.component.html',
	styleUrls: ['./main-nav.component.scss'],
	animations: [
		trigger('navbarState', [
			state('inactive', style({
				height: 0
			})),
			state('active', style({
				height: '*'
			})),
			transition('inactive => active', animate('500ms ease-in-out')),
			transition('active => inactive', animate('400ms 400ms ease-in-out'))
		]),
		trigger('openerStateTop', [
			state('inactive', style({ transform: 'rotate(0) translate(0, 0)' })),
			state('active', style({ transform: 'rotate(-45deg) translate(-6px, 8px)' })),

			transition('inactive => active', animate('500ms ease-in-out')),
			transition('active => inactive', animate('800ms ease-in-out'))
		]),
		trigger('openerStateBottom', [
			state('inactive', style({ transform: 'rotate(0) translate(0, 0)' })),
			state('active', style({ transform: 'rotate(45deg) translate(-5px, -8px)' })),

			transition('inactive => active', animate('500ms ease-in-out')),
			transition('active => inactive', animate('800ms ease-in-out'))
		]),
		trigger('openerStateCenter', [
			state('inactive', style({ opacity: 1 })),
			state('active', style({ opacity: 0 })),

			transition('inactive => active', animate('500ms ease-in-out')),
			transition('active => inactive', animate('800ms ease-in-out'))
		]),
		trigger('itemsAmation', [
  	  state('inactive', style({ opacity: 0 })),
      transition('inactive => active', [
      	style({ opacity: 1 }),
        query('a', style({ opacity: 0, transform: 'translateY(-30px)'})),
        query('a',
          stagger(100, [
            animate(200, style({ opacity: 1, transform: 'translateY(0)'}))
        ]))
      ]),
      transition('active => inactive', [
        query('a', style({ opacity: 1, transform: 'translateY(0)'})),
        query('a', animate('400ms 100ms', style({ opacity: 0, transform: 'translateY(-100px)'})))
      ])
    ])
	]
})
export class MainNavComponent implements OnInit {
	menuItems = [
		'News', 
		'Portfolio',
		'Information',
		'Journal',
		'Contact'
	];

	navbarVisible = 'inactive';
	flagHidden = true;
	itemsVisible = 'inactive';
	constructor() { }


	ngOnInit() {
	}
	toggleState(e) {
		this.flagHidden = !this.flagHidden;
		this.navbarVisible = this.flagHidden ? 'inactive': 'active';
	}
	animationDone(e){
		if(e.toState === 'active' ) {
			this.itemsVisible = 'active';
		}
	}
	animationStart(e){
		if(e.toState === 'inactive' ) {
			this.itemsVisible = 'inactive';
		}
	}
}


