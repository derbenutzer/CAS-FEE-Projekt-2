import { Injectable } from '@angular/core';

import { Forum } from './forum';
import { FORUMS } from './mock-forums';
//import { Promise} from '@angular/core';

@Injectable()
export class ForumService {

  getForums(): Promise<Forum[]> {
    return Promise.resolve(FORUMS);
  }

  getForum(id: number): Promise<Forum> {
    return this.getForums()
      .then(forums => forums.find(forum => forum.id === id));
  }

  saveForum(forum: Forum): void {
    console.log("saved Forum");
    console.log(forum.name);
    console.log(forum.id);
  }

}
