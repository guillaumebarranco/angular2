import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { BookComponent } from './components/book-detail.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HeroDetailComponent,
		BookComponent
	],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
