import { Component} from "@angular/core";
import { NgForm } from "@angular/forms";
import { MyAppService } from "src/app/my-app/my-app.service";

import { PostService } from "../posts.service";
@Component ({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredTitle = "";
  enteredAuthor = "";
  enteredContent = "";

  constructor (public postService:PostService, public myappService:MyAppService) {}

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.author, form.value.content);
    console.log(form.value);
    this.myappService.addPost(form.value.title, form.value.author, form.value.content);
  }
}
