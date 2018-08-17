import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'footer-page',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {

  logoUrl: string;
  data: any;
  copyright: string;
  tools: string[];
  objectA = {
    "post": false,
    "address": false,
    "social": false
  };
  socialIcons: string[];
  flagEvent = false;
  @Output() fakeClick = new EventEmitter<boolean>()

  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.logoUrl = this.footerService.logoUrl;
    this.data = this.footerService.data;
    this.copyright = this.footerService.copyright;
    this.tools = this.footerService.tools;
    this.socialIcons = this.footerService.socialIcons;
  }


  transformTel(tel){
    let phone = tel.match(/\d/gm).join('');
    return '+' + phone;
  }
  scrollTo($event) {
    this.fakeClick.emit($event);
  }
}
