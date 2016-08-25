import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
      .then(response => response.json() as Competition[])
      .catch(this.handleError);
  }

  getCompetition(id: number): Promise<Competition> {
    return this.getCompetitions()
      .then(dave => dave.find(comp => comp.id === id));
  }

  save(competition: Competition): Promise<Competition> {
    if (competition.id) {
      return this.http.put(this.compUrl, competition)
        .toPromise()
        .then(resp => resp.json() as Competition)
        .catch(this.handleError);
    }
    return this.http.post(this.compUrl, competition)
      .toPromise()
      .then(resp => resp.json() as Competition)
      .catch(this.handleError);
  }

  delete(competition: Competition): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.compUrl}/${competition.id}`;

    return this.http.delete(url, {headers: headers})
              .toPromise()
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred in CompetitionService ', error);
    return Promise.reject(error.message || error);
  }
}