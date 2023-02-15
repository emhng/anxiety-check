import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./pages/index/index.module').then(module => module.IndexModule),
		data: { title: 'welcome' }
	},
	{
		path: 'breathe',
		loadChildren: () =>
			import('./pages/breathe/breathe.module').then(
				module => module.BreatheModule
			),
		data: { title: 'breathe' }
	},
	{
		path: 'rain',
		loadChildren: () =>
			import('./pages/rain/rain.module').then(module => module.RainModule),
		data: { title: 'R.A.I.N' }
	},
	{
		path: 'activity-list',
		loadChildren: () =>
			import('./pages/activity-list/activity-list.module').then(
				module => module.ActivityListModule
			),
		data: { title: 'Self-care activities' }
	},
	{
		path: 'better',
		loadChildren: () =>
			import('./pages/better/better.module').then(
				module => module.BetterModule
			),
		data: { title: 'feeling better' }
	},
	{
		path: 'support',
		loadChildren: () =>
			import('./pages/support/support.module').then(
				module => module.SupportModule
			),
		data: { title: 'getting more support' }
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'top'
		})
	],
	exports: [RouterModule]
})
export class AppRoutingModule {}
