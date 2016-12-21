import { Component } from '@angular/core';
import {Forum} from "./forum";
import {ForumOwner} from "./forum-owner";

import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Component({
  moduleId: module.id,
  selector: 'create-forum',
  template: `    
    <h2>{{pageTitle}}</h2>
    <div class="container">
    <form (submit)="addForum(
        title.value,
        owner.value,
        categories.value
    )">
      <div class="form-group">
        <label for="title">Titel</label>
        <input #title type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="owner">Owner</label>
        <input #owner type="text" class="form-control" required>
      </div>
      <div class="form-group">
        <label for="categories">Kategorien</label>
        <input #categories type="text" class="form-control">
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
    </form>
    </div>
  `,
})
export class CreateForumComponent {

  pageTitle="Forum erstellen";
  submitted = false;
  //onSubmit() { this.submitted = true; }

  id: string;
  title: string;
  owner: string;
  categories: string[];
  forum: Forum;

  private apiUrl = 'http://localhost:8180/api/rt';  // URL to web api
  constructor (private http: Http){};


  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  //constructor(private heroService: HeroService) { }

  addForum(title: string, owner: string, categories?: string): void {

    this.title = title;
    this.owner = owner;
    if(categories){
      this.categories = categories.split(",");
    }
    else{
      this.categories = ["noch keine Kategorie"]
    }

    this.createNewForum()
      .then(id => this.updateNewForum(id));

    this.submitted = true;
  };

  createNewForum(): Promise<string> {
    return this.http.post(this.apiUrl,"test")
      .toPromise()
      .then(response => response.json().id)
      .catch(this.handleError);
  }

  updateNewForum(id: string): Promise<Forum> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("id: "+ id);
    this.id = id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url,{"title":this.title,"owner":this.owner, "categories":this.categories},options)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
