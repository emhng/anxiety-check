import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreatheComponent } from './breathe.component';
import { LinkButtonModule } from 'src/app/components/link-button/link-button.module';

export const routes: Routes = [
	{
		path: '',
		component: BreatheComponent
	}
];

@NgModule({
	declarations: [BreatheComponent],
	imports: [CommonModule, RouterModule.forChild(routes), LinkButtonModule],
	exports: [RouterModule, BreatheComponent]
})
export class BreatheModule {}
