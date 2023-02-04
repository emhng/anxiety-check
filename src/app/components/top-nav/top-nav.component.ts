import { Component } from '@angular/core';
import { Router, Data, ActivationStart } from '@angular/router';

@Component({
	selector: 'app-top-nav',
	templateUrl: './top-nav.component.html',
	styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
	path = '';
	title: string | undefined;

	constructor (private router: Router) {}

	ngOnInit () {
		this.router.events.subscribe(data => {
			if (data instanceof ActivationStart) {
				this.title = data.snapshot.data['title'];
			}
		});
	}
}
