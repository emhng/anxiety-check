import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list.component';

import { RouterModule, Routes } from '@angular/router';
import { LinkButtonModule } from 'src/app/components/link-button/link-button.module';
import { ExpandableModule } from 'src/app/components/expandable/expandable.module';

export const routes: Routes = [
	{
		path: '',
		component: ActivityListComponent
	}
];

@NgModule({
	declarations: [ActivityListComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		LinkButtonModule,
		ExpandableModule
	],
	exports: [ActivityListComponent]
})
export class ActivityListModule {}
