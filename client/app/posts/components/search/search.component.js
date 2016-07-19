import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, RouteParams } from '@angular/router-deprecated';

import template from './search.template.html';
import { PostService } from '../../services/post/post.service';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { UserService } from '../../../auth';
import { ShortDescriptionPipe } from '../../pipes/short-description.pipe';

@Component({
  selector: 'search',
  template: template,
  directives: [ROUTER_DIRECTIVES, PostListItemComponent],
 
  pipes: [ShortDescriptionPipe]
})
export class SearchComponent {
  constructor(postService: PostService, userService: UserService, params: RouteParams) {
    this._postService = postService;
    this._userService = userService;    
    this._params = params; 
  }

  ngOnInit() {//searchPosts
    this._postService.searchPosts(this._params.get('term')).subscribe(
      (results) => {          
         this._results = results;
      },
      (error) => console.error(error)
    );
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}
