import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Post } from './post';
import { trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import { FiltersService } from './filters.service';

export interface filter {
	text: string,
	icon: string,
	type: string
}

@Component({
	selector: 'filter-posts',
	templateUrl: './filter-posts.component.html',
	styleUrls: ['./filter-posts.component.scss'],
	providers: [FiltersService],
	animations: [
		trigger('postAnimation', [
			state('in', style({ opacity: 1})),
			transition('* => in', [style({opacity: 0}), animate('600ms ease-in-out')])
		])
	]
})



export class FilterPostsComponent implements OnInit {

	posts: Post[];
	error:any;
	showPosts: number = 5;
	isMorePosts = true;
	links: filter[];
	activeLinkIndex = 0;
	flagInitPosts:boolean = false;
	postStateAnimation:any = false;


	constructor(private filtersService: FiltersService) {}
	
	getPosts(): void {
		let self = this;

		this.filtersService.getData().subscribe((data:Post[]) => this.posts = data);
	}
	addMorePosts(e):void {
		e.preventDefault();
		this.showPosts += 5;
		if(this.showPosts >= this.posts.length){
			this.isMorePosts = false;
		}
	}
	sortPosts():void {
		let type = this.links[this.activeLinkIndex].type;

		this.posts.sort(function(a, b){
			let typeA = a[type];
			let typeB = b[type];
			let date;
			if(type === 'date'){
				typeA = new Date(typeA);
				typeB = new Date(typeB);
			}
			return typeB - typeA;
		});
		this.posts = this.posts.slice();
	}
	
	filterTo(index, e):void {
		e.preventDefault();
		if(this.activeLinkIndex === index) return;

		this.activeLinkIndex = index;
		this.sortPosts();
	}

	ngOnInit() {
		this.links = this.filtersService.links;
		this.getPosts();
	}
	ngAfterContentChecked() {
		if(this.posts && !this.flagInitPosts){
			this.flagInitPosts = true;
			this.sortPosts();
			this.postStateAnimation = 'in';
		}
	}

}
