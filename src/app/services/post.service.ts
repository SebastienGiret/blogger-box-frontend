import { Injectable, NgModule } from "@angular/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { AppComponent } from "../app.component";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { Observable, of } from 'rxjs';

import { POSTS, Post } from '../data/post'

@Injectable()
export class PostService {
    constructor(private http: HttpClient) { }

    getPosts(): Observable<Post[]>{
        const posts= of(POSTS);
        return posts;
    }
}
