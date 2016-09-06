"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var BOOKS = [
    {
        name: "Js Ninja",
        pages: 120
    },
    {
        name: "MEAN Stack",
        pages: 298
    }
];
var BookComponent = (function () {
    function BookComponent() {
        this.books = BOOKS;
    }
    BookComponent = __decorate([
        core_1.Component({
            selector: 'my-book',
            template: "\n\t\t<div *ngFor=\"let book of books\">\n\t\t\t<div>{{book.name}} with {{book.pages}} pages</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;
//# sourceMappingURL=book-detail.component.js.map