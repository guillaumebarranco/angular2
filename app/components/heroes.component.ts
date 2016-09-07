import { Component, Input, OnInit } from '@angular/core';

/** Importation du Component de la Class hero */
import { Hero } from './../classes/hero';

/** Importation du Service hero */
import { HeroService } from './../services/hero.service';

@Component({
	selector: 'my-heroes',
	template: `
		<h2>My classmates (hover for the state)</h2>
		<ul class="heroes">

			<li 
				*ngFor="let hero of heroes"
				[class.selected]="hero === selectedHero"
				(click)="onSelect(hero)"
			>
				<em>{{hero.state}}</em>
				<span class="badge">{{hero.id}}</span>
				<strong>{{hero.name}}</strong>
			</li>
	    </ul>
	    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
	`,
  providers: [HeroService],
  styles: [`
    .selected {
		background-color: #CFD8DC !important;
		color: white;
    }
    .heroes {
		margin: 0 0 2em 0;
		list-style-type: none;
		padding: 0;
		width: 800px;
		display: flex;
		justify-content: center;
    }
    .heroes li {
		cursor: pointer;
		position: relative;
		left: 0;
		background-color: #EEE;
		margin: .5em;
		padding: .3em;
		height: 100px;
		border-radius: 50%;
		color: #000;
		width: 100px;
    }
    .heroes li.selected:hover {
		background-color: #BBD8DC !important;
		color: white;
    }
    .heroes li:hover {
		color: #607D8B;
		background-color: #DDD;
    }
	.heroes li em {
		display: none;
		padding: 5px;
		background: white;
		color: black;
		position: absolute;
		top: 150px;
		left: 15px;
		font-weight: bold;
		text-align:center;
	}
	.heroes li:hover em {
		display: block;
	}
	.heroes li strong {
		position: relative;
	    top: 32px;
	    left: -7px;
	}
    .heroes .text {
		position: relative;
		top: -3px;
    }
    .heroes .badge {
		display: inline-block;
		font-size: small;
		color: white;
		padding: 0.8em 0.7em 0 0.7em;
		background-color: #607D8B;
		line-height: 1em;
		position: relative;
		left: -1px;
		top: -4px;
		height: 1.8em;
		margin-right: .8em;
		border-radius: 4px 0 0 4px;
    }
  `]
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	constructor(private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}
