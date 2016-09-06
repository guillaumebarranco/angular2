import { Component, Input } from '@angular/core';
import { Hero } from './../classes/hero';

@Component({
	selector: 'my-new-test',
	template: `
		<div>
			<my-hero-detail [hero]="selectedHero"></my-hero-detail>
		</div>
	`
})

export class HeroesComponent {
	hero: Hero;
}
