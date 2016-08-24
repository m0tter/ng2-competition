import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Competition } from './competition';
import { School, Team } from './school';

@Injectable()
export class CompetitionService {
  private compUrl: string = '/api/comps';
  private schoolUrl: string = 'api/schools';

  constructor(private http: Http) { }

  getCompetitions(): Promise<Competition[]> {
    return this.http.get(this.compUrl)
      .toPromise()
      // .then(response => response.json().data as Competition[])
      .then(response => response.json() as Competition[])
      .catch(this.handleError);
  }

  getCompetition(id: number): Promise<Competition> {
    return this.getCompetitions()
      .then(dave => dave.find(comp => comp.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in CompetitionService ', error);
    return Promise.reject(error.message || error);
  }
}