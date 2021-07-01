import { Post } from '../posts/post.model';
import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyAppService {
  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4100';
  blogs: any[] = [];




  getblogs() {
    let blogs: any;
    console.log("in service");
    return this.http.get(`${this.uri}/getBlogs`);
 }

  getIssueById(id) {
    return this.http.get(`${this.uri}/blogs/${id}`);
  }

  addPost(title, content, author) {
    const blog = {
      title: title,
      content: content,
      author: author,


    };

    console.log(blog);
    this.http.post(`${this.uri}/postBlog`, blog ,{responseType: "text"}).subscribe(data => {
      console.log(data);
  });
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }


}
