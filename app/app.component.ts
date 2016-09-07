/** Importation du systeme de Component */
import { Component, OnInit } from '@angular/core';

/** Importation du Component de la Class hero */
import { Hero } from './classes/hero';
import { Book } from './classes/book';

const heroes: Hero[] = [];

/** Component definition */
@Component({
  selector: 'my-angular-app',
  template: 
	`
	    <h1>{{title}}</h1>

	    <a routerLink="/heroes">Heroes</a>
   		<router-outlet></router-outlet>

   		<a routerLink="/books">Books</a>
   		<router-outlet></router-outlet>
	`
})

/**
 * Class returning the main Component for the application
 */
export class AppComponent implements OnInit {

	title = 'Wat is dat class';
}
