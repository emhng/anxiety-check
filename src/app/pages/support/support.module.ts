import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { RouterModule, Routes } from '@angular/router';
import { DisclaimerModule } from 'src/app/components/disclaimer/disclaimer.module';

export const routes: Routes = [
	{
		path: '',
		component: SupportComponent
	}
];
@NgModule({
	declarations: [SupportComponent],
	imports: [CommonModule, RouterModule.forChild(routes), DisclaimerModule],
	exports: [RouterModule, SupportComponent]
})
export class SupportModule {}
