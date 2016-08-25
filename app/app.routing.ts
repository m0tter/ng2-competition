import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { HeroesComponent }      from './heroes.component';

import { SetupComponent } from './setup.component';
import { CompetitionDetailComponent } from './competition-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'setup',
    component: SetupComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: CompetitionDetailComponent
  }
//  {
//    path: 'heroes',
//    component: HeroesComponent
//  }
];

export const routing = RouterModule.forRoot(appRoutes);