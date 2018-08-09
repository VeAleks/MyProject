import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post';

@Pipe({
	name: 'shortPosts',
	// pure: false
})
export class ShortPostsPipe implements PipeTransform {
	transform(posts:Post[], args: number): any {
		if(posts) return posts.slice(0, args);
	}
}
