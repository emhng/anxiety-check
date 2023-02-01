import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-expandable',
	templateUrl: './expandable.component.html',
	styleUrls: ['./expandable.component.css']
})
export class ExpandableComponent {
	@Input() summary: string = '';
	@Input() details: string[] = [];
	@Input() citation?: string = '';
	@Input() question?: string = '';
	@Input() placeholder?: string = '';
}
