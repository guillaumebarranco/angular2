import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { BookComponent } from './components/book-detail.component';
import { HeroesComponent } from './components/heroes.component';
import { routing } from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		BookComponent,
		HeroesComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
