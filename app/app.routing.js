"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard.component');
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroesComponent }      from './heroes.component';
var setup_component_1 = require('./setup.component');
var competition_detail_component_1 = require('./competition-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'setup',
        component: setup_component_1.SetupComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: competition_detail_component_1.CompetitionDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map