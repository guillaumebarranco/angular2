"use strict";
var router_1 = require('@angular/router');
var book_detail_component_1 = require('./components/book-detail.component');
var heroes_component_1 = require('./components/heroes.component');
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'books',
        component: book_detail_component_1.BookComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map