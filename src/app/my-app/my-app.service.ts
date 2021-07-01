import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyAppService {
  constructor(private http: HttpClient) { }

  uri = 'http://localhost:4100/postBlog';



  getIssues() {
    return this.http.get(`${this.uri}/blogs`);
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
    return this.http.post(`${this.uri}/issues/add`, blog);
  }

  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }


}
