import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {Post} from '../../models/post';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.sass']
})
export class ListPostComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.listPosts();
  }
  listPosts() {

    this.postService.getPosts().subscribe(
      data => {
        // console.log('Posts=' + JSON.stringify(data));
        this.posts = data;
      }
    );
  }
}
