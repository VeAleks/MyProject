import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	logoDesktop = 'assets/images/logo.png';
	logoMobile = 'assets/images/logo-m.png';
	logoAlt = 'assets/images/logo.png';
	
	flagHidden = true;
	constructor() {}

	ngOnInit() {
	}

}
