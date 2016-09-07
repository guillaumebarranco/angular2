import { Component, OnInit } from '@angular/core';
import { Book } from './../classes/book';

import { BookService } from './../services/book.service';

@Component({
	selector: 'my-book',
	template: `
		<div *ngFor="let book of books">
			<div>{{book.name}} with {{book.pages}} pages</div>
		</div>
	`,
	providers: [BookService]
})

export class BookComponent implements OnInit {
	books: Book[];

	constructor(private bookService: BookService) { }

	getBooks(): void {
		this.bookService.getBooks().then(books => this.books = books);
	}

	ngOnInit(): void {
		this.getBooks();
	}
}
