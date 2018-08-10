import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  logoUrl = 'assets/images/logo-bottom.png';
	data = [
		{
			title: 'featured post',
      post: {
        title: 'It is situated in the bay of',
        text: 'It is situated in the bay of Yeddo, and at but a short distance from that second capital of the Japanese Empire, and the'
      }
		},
		{
			title: 'address',
      address: {
        addressInfo: '3921 Ash Avenue Saint Louis,MO 63141',
        contactInfo: {
          tel: '314-810-6952',
          email: 'contact@centy.com'
        }
      }
		},
    {
      title: 'follow us',
      social: [
        {
          name: 'Facebook',
          linkUrl: 'https://facebook.com'
        },
        {
          name: 'Twitter',
          linkUrl: 'https://twitter.com'
        },
        {
          name: 'Instagram',
          linkUrl: 'https://instagram.com'
        }
      ]
    }
	]
  constructor() { }
}
