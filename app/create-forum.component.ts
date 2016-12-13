import { Component, OnInit } from '@angular/core';
import {Forum} from "./forum";
import {ForumOwner} from "./forum-owner";

@Component({
  moduleId: module.id,
  selector: 'create-forum',
  template: `
    <h2>{{title}}</h2>
    <div>
    <label>Id: </label>{{model.id}}</div>
    <div>
      <label>Name: </label>
      <input [(ngModel)]="model.name" placeholder="name" />
    </div>
    <div>
      <label>Location: </label>
      <input [(ngModel)]="model.location" placeholder="location" />
    </div>
    <div>
      <label>Category: </label>
      <input [(ngModel)]="model.category" placeholder="category" />
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  `,
})


export class CreateForumComponent implements OnInit {

  title="Forum erstellen";
  model = new Forum(21, 'Name', new ForumOwner(11,'Mr. Nice',"Mr.Nice@angular.com"), 'Location','Category');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  //heroes: Hero[] = [];

  //constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    console.log("onInit createForum");
    //this.heroService.getHeroes()
    //.then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
