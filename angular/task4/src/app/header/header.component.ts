import { Component, OnInit, ElementRef,  ViewChild, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {
	logoDesktop = 'assets/images/logo.png';
	logoMobile = 'assets/images/logo-m.png';
	logoAlt = 'assets/images/logo.png';
	flagHidden = true;
	
	@ViewChild('header') header: ElementRef;
	@Input() clickOn;
	@Output() getOffsetTop =  new EventEmitter<boolean>();

	constructor() {}
	ngOnInit() {}
	ngOnChanges() {
		if(this.clickOn){
			this.sendOffset(this.header.nativeElement.offsetTop)
		}
	}

	sendOffset(top){
		this.getOffsetTop.emit(top)
	}

}
