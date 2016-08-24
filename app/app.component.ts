import { Component } from '@angular/core';

@Component({
  selector: 'my-app',

  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/setup" routerLinkActive="active">Setup</a>
      <a routerLink="/rescue" routerLinkActive="active">Rescue</a>
      <a routerLink="/sumo" routerLinkActive="active">Sumo</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title: string = 'SCRC Competition';
}