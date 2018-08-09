import { Component, OnInit, Directive, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition, query, stagger} from '@angular/animations';

@Component({
	selector: 'blog-intro',
	templateUrl: './blog-intro.component.html',
	styleUrls: ['./blog-intro.component.scss'],
	animations: [
		trigger('slideShow', [
			state('center', style({
				transform: 'translateX(0)',
			})),
			state('fromLeft', style({
				transform: 'translateX(100%)',
			})),
			state('fromRight', style({
				transform: 'translateX(-100%)',

			})),
			transition('fromRight => center', animate(500)),
			transition('fromLeft => center', animate(500))
		]),
		trigger('slideHide', [
			state('center', style({
				transform: 'translateX(0)',
			})),
			state('toLeft', style({
				transform: 'translateX(100%)'
			})),
			state('toRight', style({
				transform: 'translateX(-100%)',

			})),
			transition('center => toLeft', animate(500)),
			transition('center => toRight', animate(500)),
		])
	]

})
export class BlogIntroComponent implements OnInit {
	headingData = {
		title: 'Blog',
		text: [
			'Read the latest articles'
		]
	}
	carouselData = [
		{
			image: '../assets/images/slide-img.png',
			imageAlt: 'image description',
			title: 'Carrying travellers',
			published: '2013, April 30',
			text: 'Passepartout went timidly ashore on this so curious territory of the Sons of the Sun. He had nothing better to do than, taking chance for his guide, to wander aimlessly through the streets of Yokohama. He found himself at first in a thoroughly European',
			linkTo: '#'
		},
		{
			image: '../assets/images/slide-img2.png',
			imageAlt: 'image description',
			title: 'Carrying travellers',
			published: '2013, April 10',
			text: 'Passepartout went timidly ashore on this so curious territory',
			linkTo: '#'
		},
		{
			image: '../assets/images/slide-img3.png',
			imageAlt: 'image description',
			title: 'Carrying travellers',
			published: '2013, April 30',
			text: 'Passepartout went timidly ashore on this so curious territory of the Sons of the Sun. He had nothing better to do than, taking chance for his guide, to wander aimlessly through the streets of Yokohama. He found himself at first in a thoroughly European.<br>Passepartout went timidly ashore on this so curious territory of the Sons of the Sun. He had nothing better to do than, taking chance for his guide, to wander aimlessly through the streets of Yokohama. He found himself at first in a thoroughly European.', 
			linkTo: '#'
		}
	]
	showObject: object = {};
	index = 0;
	isEvent = false;
	animateShow = 'center';

	animateHide: string;
	prevPosition: string;
	currentPosition: string;
	hideObject: object;
	switchers = this.carouselData.length;
	slideCurrent;
	slidesetStyles = {
		'transition': 'height 0.5s linear',
		'height': 'auto'
	}
	timer;

	constructor(private elementRef: ElementRef){}
	@HostListener('window:resize') onResize() {

    clearTimeout(this.timer);
		this.timer = setTimeout(()=> this.slidesetStyles.height = this.slideCurrent.clientHeight + 'px' , 300);
  }
	ngOnInit() {
		this.refreshStyles();
		this.showObject = this.carouselData[this.index];
		this.slideCurrent = this.elementRef.nativeElement.querySelectorAll('.slide.current')[0];

		this.timer = setTimeout(()=> this.slidesetStyles.height = this.slideCurrent.clientHeight + 'px' , 300);
		
	}
	refreshStyles() {
		this.animateHide = 'center';
		this.hideObject = this.showObject;
		this.isEvent = false;
		this.prevPosition = 'absolute';
		this.currentPosition = 'relative';
	}
	next() {
		if(this.isEvent) return;
		this.isEvent = true;
		this.index += 1;
		if(this.index > this.carouselData.length - 1) {
			this.index = 0;
		}
		this.setSlide(true);
	}

	setSlide(leftDirection) {
		this.showObject = this.carouselData[this.index];
		this.prevPosition = 'relative';
		this.currentPosition = 'absolute';
		if(leftDirection) {
			this.animateShow = 'fromLeft';
			this.animateHide = 'toRight';
		} else {
			this.animateShow = 'fromRight'
			this.animateHide = 'toLeft';
		}
	}
	prev() {
		if(this.isEvent) return;
		this.isEvent = true;
		this.index -= 1;
		if(this.index < 0) {
			this.index = this.carouselData.length - 1;
		}
		
		this.setSlide(false);
	}

	animateShowDone(e) {
		this.animateShow = 'center';
		if(e.toState === "center") {
			this.refreshStyles();
		}
	}
	animateShowStart(e) {
		if(e.fromState === 'center'){
			this.slidesetStyles.height = this.slideCurrent.clientHeight + 'px';
		}
	}
	clickToSlide(e){
		let flag;
		if(this.index === e) return;
		this.isEvent = true;
		flag = (this.index > e)? false : true;
		this.index = e;
		this.setSlide(flag);
	}
}
