import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home.component";
import {CreateForumComponent} from "./create-forum.component";
import {ForumService} from "./forum.service";
import {ForumDetailComponent} from "./forum-detail.component";
import {ForumsComponent} from "./forums.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CreateForumComponent,
    ForumDetailComponent,
    ForumsComponent
  ],
  providers: [ ForumService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
