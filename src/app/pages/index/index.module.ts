import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';

import { ButtonModule } from 'src/app/components/button/button.module';

export const routes: Routes = [
	{
		path: '',
		component: IndexComponent
	}
];

@NgModule({
	declarations: [IndexComponent],
	imports: [CommonModule, RouterModule.forChild(routes), ButtonModule],
	exports: [RouterModule, IndexComponent]
})
export class IndexModule {}
