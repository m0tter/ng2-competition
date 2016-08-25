import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CompetitionService } from './competition.service';

import { Competition } from './competition';
import { School, Team } from './school';

@Component({
    selector: 'competition-detail',
    templateUrl: 'app/competition-detail.component.html',
    styleUrls: ['app/competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {
    @Input() competition: Competition;
    @Output() close = new EventEmitter();
    error: any;
    navigated: boolean = false;
    selectedSchool: School = null;
    newSchool: School = new School();
    newTeam: Team = new Team();

    constructor(
        private compService: CompetitionService,
        private route: ActivatedRoute) { 
    }

    ngOnInit(): void { 
        this.route.params.forEach((params: Params) => {
            if (params['id'] !== undefined) {
                let id = +params['id'];
                this.navigated = true;
                this.compService.getCompetition(id)
                    .then(comp => this.competition = comp);
            } else {
                this.navigated = false;
                this.competition = new Competition();
            }
        });
    }

    save(): void { }

    goBack(savedComp: Competition = null): void {
        this.close.emit(savedComp);
        if (this.navigated) { window.history.back(); }
    }

    onSelect(school: School): void {
        this.selectedSchool = school;
    }

    addNewSchool(): void {
        let school = new School();
        school.name = this.newSchool.name;
        school.short = this.newSchool.short;
        this.competition.schools.push(school);
        this.newSchool = new School();
    }

    addNewTeam(): void {
        let team = new Team();
        team.name = this.newTeam.name;
        this.selectedSchool.teams.push(team);
        this.newTeam.name = '';
    }

    private errorHandler(error: any): Promise<any> {
        console.error('An error occurred in CompetitionDetailComponent ', error);
        return Promise.reject(error.message || error);
    }

}
