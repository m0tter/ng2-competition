import { Component, OnInit } from '@angular/core';

import { CompetitionService } from './competition.service';
import { Competition } from './competition';
import { School } from './school';

@Component({
  selector: 'setup',
  templateUrl: 'app/setup.component.html',
  styleUrls: ['app/setup.component.css']
})
export class SetupComponent implements OnInit {
  competitions: Competition[];
  selectedCompetition: Competition;
  addingCompetition: boolean = false;
  error: any;

  constructor(private compService: CompetitionService) { }

  getCompetitions(): void {
    this.compService
        .getCompetitions()
        .then(competitions => this.competitions = competitions)
        .catch(error => this.error = error);
  }

  ngOnInit(): void { 
    this.getCompetitions();
  }
}