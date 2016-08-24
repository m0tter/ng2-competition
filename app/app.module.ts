import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { AppComponent } from './app.component';
import { routing }      from './app.routing';

import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

import { CompetitionService }   from './competition.service';
import { SetupComponent }       from './setup.component';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        routing,
        HttpModule 
    ],
    declarations: [ 
        AppComponent,
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
        HeroSearchComponent,
        SetupComponent
    ],
    providers: [
        HeroService,
        CompetitionService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }