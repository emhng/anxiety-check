import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableComponent } from './expandable.component';

import { QuestionAnswerModule } from '../question-answer/question-answer.module';

@NgModule({
	declarations: [ExpandableComponent],
	imports: [CommonModule, QuestionAnswerModule],
	exports: [ExpandableComponent]
})
export class ExpandableModule {}
