import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  url = 'http://localhost:3000/posts';

  constructor(private httpCliente: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpCliente.get<Post[]>(this.url);
  }

  postPost(post: Post): Observable<Post> {
    return this.httpCliente.post<Post>(this.url, post);
  }
}
