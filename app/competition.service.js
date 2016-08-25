"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var CompetitionService = (function () {
    function CompetitionService(http) {
        this.http = http;
        this.compUrl = '/api/comps';
        this.schoolUrl = 'api/schools';
    }
    CompetitionService.prototype.getCompetitions = function () {
        return this.http.get(this.compUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompetitionService.prototype.getCompetition = function (id) {
        return this.getCompetitions()
            .then(function (dave) { return dave.find(function (comp) { return comp.id === id; }); });
    };
    CompetitionService.prototype.save = function (competition) {
        if (competition.id) {
            return this.http.put(this.compUrl, competition)
                .toPromise()
                .then(function (resp) { return resp.json(); })
                .catch(this.handleError);
        }
        return this.http.post(this.compUrl, competition)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    CompetitionService.prototype.delete = function (competition) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.compUrl + "/" + competition.id;
        return this.http.delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    CompetitionService.prototype.handleError = function (error) {
        console.error('An error occurred in CompetitionService ', error);
        return Promise.reject(error.message || error);
    };
    CompetitionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompetitionService);
    return CompetitionService;
}());
exports.CompetitionService = CompetitionService;
//# sourceMappingURL=competition.service.js.map