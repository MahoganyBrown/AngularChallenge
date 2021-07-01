import { Component, OnInit} from "@angular/core";
import { MyAppService } from "src/app/my-app/my-app.service";

import { Post } from '../post.model';
import { PostService } from '../posts.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {
  posts: any;

  constructor(public postService: PostService, public myappService:MyAppService) {}

  ngOnInit() {
    //this.posts = this.postService.getPosts();
    this.myappService.getblogs().subscribe((data) => {
      this.posts = data;
      console.log('posts', this.posts);
    });
  }
}


