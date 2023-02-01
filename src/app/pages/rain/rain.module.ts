import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RainComponent } from './rain.component';
import { LinkButtonModule } from 'src/app/components/link-button/link-button.module';
import { IndexComponent } from './index/index.component';
import { RecognizeComponent } from './recognize/recognize.component';
import { AllowComponent } from './allow/allow.component';
import { InvestigateComponent } from './investigate/investigate.component';
import { NurtureComponent } from './nurture/nurture.component';
import { QuestionAnswerModule } from 'src/app/components/question-answer/question-answer.module';
import { CheckInComponent } from './check-in/check-in.component';

export const routes: Routes = [
	{
		path: '',
		component: IndexComponent
	},
	{
		path: 'recognize',
		component: RecognizeComponent
	},
	{
		path: 'allow',
		component: AllowComponent
	},
	{
		path: 'investigate',
		component: InvestigateComponent
	},
	{
		path: 'nurture',
		component: NurtureComponent
	},
	{
		path: 'check-in',
		component: CheckInComponent
	}
];

@NgModule({
	declarations: [
		RainComponent,
		IndexComponent,
		AllowComponent,
		InvestigateComponent,
		NurtureComponent,
		RecognizeComponent,
		CheckInComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		LinkButtonModule,
		QuestionAnswerModule
	],
	exports: [RouterModule, RainComponent]
})
export class RainModule {}
