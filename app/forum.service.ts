import { Injectable } from '@angular/core';
import { Forum } from './forum';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ForumService {

  private forumsUrl = 'http://localhost:8180/api/rt';  // URL to web api

  constructor (private http: Http){};

  getForums(): Promise<Forum[]> {
    return this.http.get(this.forumsUrl)
      .toPromise()
      //.then(response => console.log(response.json()))
      .then(response => response.json() as Forum[])
      //.then(response => console.log(response))
      //.then(response => console.log("RESPONSE "))
      .catch(this.handleError);
  }

  getForum(id: number): Promise<Forum> {
    const url = `${this.forumsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Forum)
      .catch(this.handleError);
  }

  saveForum(forum: Forum): void {
    console.log("saved Forum");
    //console.log(forum.name);
    //console.log(forum.id);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
