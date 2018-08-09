import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'footer-page',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  providers: [FooterService]
})
export class FooterComponent implements OnInit {

  constructor(private footerService: FooterService) { }

  ngOnInit() {
  	console.log(this.footerService.data)
  }

}
