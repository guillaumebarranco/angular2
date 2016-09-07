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
/** Importation du Service hero */
var hero_service_1 = require('./../services/hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n\t\t<h2>My classmates (hover for the state)</h2>\n\t\t<ul class=\"heroes\">\n\n\t\t\t<li \n\t\t\t\t*ngFor=\"let hero of heroes\"\n\t\t\t\t[class.selected]=\"hero === selectedHero\"\n\t\t\t\t(click)=\"onSelect(hero)\"\n\t\t\t>\n\t\t\t\t<em>{{hero.state}}</em>\n\t\t\t\t<span class=\"badge\">{{hero.id}}</span>\n\t\t\t\t<strong>{{hero.name}}</strong>\n\t\t\t</li>\n\t    </ul>\n\t    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\t",
            providers: [hero_service_1.HeroService],
            styles: ["\n    .selected {\n\t\tbackground-color: #CFD8DC !important;\n\t\tcolor: white;\n    }\n    .heroes {\n\t\tmargin: 0 0 2em 0;\n\t\tlist-style-type: none;\n\t\tpadding: 0;\n\t\twidth: 800px;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n    }\n    .heroes li {\n\t\tcursor: pointer;\n\t\tposition: relative;\n\t\tleft: 0;\n\t\tbackground-color: #EEE;\n\t\tmargin: .5em;\n\t\tpadding: .3em;\n\t\theight: 100px;\n\t\tborder-radius: 50%;\n\t\tcolor: #000;\n\t\twidth: 100px;\n    }\n    .heroes li.selected:hover {\n\t\tbackground-color: #BBD8DC !important;\n\t\tcolor: white;\n    }\n    .heroes li:hover {\n\t\tcolor: #607D8B;\n\t\tbackground-color: #DDD;\n    }\n\t.heroes li em {\n\t\tdisplay: none;\n\t\tpadding: 5px;\n\t\tbackground: white;\n\t\tcolor: black;\n\t\tposition: absolute;\n\t\ttop: 150px;\n\t\tleft: 15px;\n\t\tfont-weight: bold;\n\t\ttext-align:center;\n\t}\n\t.heroes li:hover em {\n\t\tdisplay: block;\n\t}\n\t.heroes li strong {\n\t\tposition: relative;\n\t    top: 32px;\n\t    left: -7px;\n\t}\n    .heroes .text {\n\t\tposition: relative;\n\t\ttop: -3px;\n    }\n    .heroes .badge {\n\t\tdisplay: inline-block;\n\t\tfont-size: small;\n\t\tcolor: white;\n\t\tpadding: 0.8em 0.7em 0 0.7em;\n\t\tbackground-color: #607D8B;\n\t\tline-height: 1em;\n\t\tposition: relative;\n\t\tleft: -1px;\n\t\ttop: -4px;\n\t\theight: 1.8em;\n\t\tmargin-right: .8em;\n\t\tborder-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map