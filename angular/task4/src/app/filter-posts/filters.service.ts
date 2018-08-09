
import { Injectable } from '@angular/core';
import { HttpClient , HttpResponse } from '@angular/common/http';
import { Post } from './post';


import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';


@Injectable()



export class FiltersService {
	url = 'assets/json/posts.json';

	links = [
		{
			text: 'most popular',
			icon: 'icon-heart',
			type: 'likes'
		},
		{
			text: 'most recent',
			icon: 'icon-calendar',
			type: 'date'
		},
		{
			text: 'most commented',
			icon: 'icon-chat',
			type: 'mostCommented'
		}
	];

	constructor(private http: HttpClient) {}
	getData(): Observable<Post[]> {
		return this.http.get(this.url).pipe(map((data:Post[])=>{
			let posts = data;
			return posts.map(function(post:Post) {
					return post;
				});
			}),
		catchError(err => {  
			console.log(err); 
			return throwError(err);
		}));
	}

}
