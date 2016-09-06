import { Component } from '@angular/core';
import { Book } from './../classes/book';

const BOOKS: Book[] = [
	{
		name: "Js Ninja",
		pages: 120		
	},
	{
		name: "MEAN Stack",
		pages: 298		
	}
];

@Component({
	selector: 'my-book',
	template: `
		<div *ngFor="let book of books">
			<div>{{book.name}} with {{book.pages}} pages</div>
		</div>
	`
})

export class BookComponent {
	book: Book;
	books = BOOKS;
}
