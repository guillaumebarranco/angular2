/** Importation du systeme de Component */
import { Component } from '@angular/core';

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
export class AppComponent {

	title = 'Wat is dat class';
}
