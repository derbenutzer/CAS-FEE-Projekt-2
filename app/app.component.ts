import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home">Startseite</a>
      <a routerLink="/create-forum">Forum erstellen</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles:[`

    nav {
      margin-top: 3rem;
      margin-bottom: 4rem;
    }
    
    nav a {
      font-size: 2rem;
      text-decoration: none;
      padding: 1rem;
      background-color: lightgrey;
      color: black;
    }
    nav a:hover {
      background-color: lightslategrey;
      color: white;
    }
  `]
})

export class AppComponent  {

  title = 'FEE - Project 2';

}
