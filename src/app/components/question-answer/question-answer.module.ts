import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionAnswerComponent } from './question-answer.component';

@NgModule({
	declarations: [QuestionAnswerComponent],
	imports: [CommonModule],
	exports: [QuestionAnswerComponent]
})
export class QuestionAnswerModule {}
