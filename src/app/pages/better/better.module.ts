import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetterComponent } from './better.component';
import { RouterModule, Routes } from '@angular/router';
import { LinkButtonModule } from 'src/app/components/link-button/link-button.module';

export const routes: Routes = [
	{
		path: '',
		component: BetterComponent
	}
];

@NgModule({
	declarations: [BetterComponent],
	imports: [CommonModule, RouterModule.forChild(routes), LinkButtonModule],
	exports: [RouterModule, BetterComponent]
})
export class BetterModule {}
