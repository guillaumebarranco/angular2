import { Component } from '@angular/core';

const name = "Guillaume Barranco";

const template = 
	`<h1>My First Angular 2 App at ECV</h1>
	<div>By ${name}</div>`
;

@Component({
  selector: 'my-angular-app',
  template: template
})

export class AppComponent { }
