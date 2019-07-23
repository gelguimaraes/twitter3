import { Component, OnInit } from '@angular/core';
import {Post} from '../../shared/post';
import {PostsService} from '../../shared/posts.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post = new Post('', '');
  posts: Observable<Post[]>;
  postsSabadoTematico: Observable<Post[]>;
  msgDireta: Observable<Post[]>;
  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
    this.postsSabadoTematico = this.postsService.getPostsSabadoTematico();
    this.msgDireta = this.postsService.getMsgDiretas();
  }

  enviarPost() {
    this.postsService.enviarPost(this.post);
  }

}
