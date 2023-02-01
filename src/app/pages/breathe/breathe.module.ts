import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BreatheComponent } from './breathe.component';

export const routes: Routes = [
	{
		path: '',
		component: BreatheComponent
	}
];

@NgModule({
	declarations: [BreatheComponent],
	imports: [CommonModule, RouterModule.forChild(routes)],
	exports: [RouterModule, BreatheComponent]
})
export class BreatheModule {}
