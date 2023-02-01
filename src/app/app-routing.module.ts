import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/index/index.module').then(module => module.IndexModule)
	},
	{
		path: 'breathe',
		loadChildren: () =>
			import('./pages/breathe/breathe.module').then(
				module => module.BreatheModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
