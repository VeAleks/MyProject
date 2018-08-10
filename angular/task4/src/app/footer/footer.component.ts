import { Component, OnInit } from '@angular/core';
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
  objectA = {
    "post": false,
    "address": false,
    "social": false
  };
  constructor(private footerService: FooterService) { }

  ngOnInit() {
    this.logoUrl = this.footerService.logoUrl;
    this.data = this.footerService.data;
  }

  transformTel(tel){
    let phone = tel.match(/\d/gm).join('');
    return '+' + phone;
  }
  scrollTo(target) {
    console.log(target)
    target.scrollIntoView();
  }
}
