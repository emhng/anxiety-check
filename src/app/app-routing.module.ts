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
	},
	{
		path: 'rain',
		loadChildren: () =>
			import('./pages/rain/rain.module').then(module => module.RainModule)
	},
	{
		path: 'activity-list',
		loadChildren: () =>
			import('./pages/activity-list/activity-list.module').then(
				module => module.ActivityListModule
			)
	},
	{
		path: 'better',
		loadChildren: () =>
			import('./pages/better/better.module').then(module => module.BetterModule)
	},
	{
		path: 'support',
		loadChildren: () =>
			import('./pages/support/support.module').then(
				module => module.SupportModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
