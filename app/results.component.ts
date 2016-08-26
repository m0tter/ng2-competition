import { Component, OnInit } from '@angular/core';

import { CompetitionService } from './competition.service'; 

import { Competition } from './competition';


@Component({
    selector: 'competition-results',
    templateUrl: 'app/results.component.html',
    styleUrls: ['app/results.component.css']
})
export class ResultsComponent implements OnInit {
    competitions: Competition[];
    selectedCompetition: Competition = null;

    constructor(private compService: CompetitionService) { }

    getCompetitons(): void {
        this.compService.getCompetitions()
            .then(resp => this.competitions = resp)
            .catch(error => this.errorHandler(error));
    }
    
    ngOnInit(): void {
        this.getCompetitons();
     }

     private errorHandler(error: any): Promise<any> {
        console.error('An error occurred in ResultComponent ', error);
        return Promise.reject(error.message || error);
     }
}