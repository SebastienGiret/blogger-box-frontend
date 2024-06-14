import { Component, OnInit } from '@angular/core'
import { Post } from '../data/post';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private postService: PostService) { }

    ngOnInit(): void {
        this.postService.getPosts().subscribe({next: (data: Post[]) => {
            console.log('Posts fetched from backend:', data); // Ajouter un log ici
            this.posts = data;
          },
          error: (err) => {
            console.error('Error fetching posts:', err); // Ajouter un log d'erreur
          }
        });
    }

}