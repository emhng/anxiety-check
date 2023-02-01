import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { RouterModule, Routes } from '@angular/router';
import { LinkButtonModule } from 'src/app/components/link-button/link-button.module';

export const routes: Routes = [
	{
		path: '',
		component: IndexComponent
	}
];

@NgModule({
	declarations: [IndexComponent],
	imports: [CommonModule, RouterModule.forChild(routes), LinkButtonModule],
	exports: [RouterModule, IndexComponent]
})
export class IndexModule {}
