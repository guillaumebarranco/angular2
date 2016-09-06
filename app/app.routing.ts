import { ModuleWithProviders }  	from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';

import { BookComponent } 			from './components/book-detail.component';
import { HeroesComponent } 			from './components/heroes.component';

const appRoutes: Routes = [
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'books',
		component: BookComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
