import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
	selector: 'app-question-answer',
	templateUrl: './question-answer.component.html',
	styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent {
	@Input() question: string = '';
	@Input() placeholder: string = 'Write down whatever comes to mind';
}
