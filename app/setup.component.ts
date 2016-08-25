import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

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

  constructor(
    private compService: CompetitionService,
    private router: Router) { 

  }

  getCompetitions(): void {
    this.compService
        .getCompetitions()
        .then(comps => { this.competitions = comps; })
        .catch(error => this.error = error);
  }

  onSelect(comp: Competition): void {
    this.selectedCompetition = comp;
    this.addingCompetition = false;
  }

  deleteComp(comp: Competition, event: any) { }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCompetition.id]);
  }

  ngOnInit(): void { 
    this.getCompetitions();
  }
}