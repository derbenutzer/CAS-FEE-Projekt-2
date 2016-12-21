//import {ForumOwner} from "./forum-owner";

export class Forum {
  constructor(
    public title: string,
    public owner: string,
    public categories?: string[]
  ) {  }
}
