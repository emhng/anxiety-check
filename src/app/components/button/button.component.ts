import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent {
	@Input() label: string = '';
	@Input() class: 'primary' | 'secondary' = 'primary';
}
