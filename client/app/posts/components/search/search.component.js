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
  changeDetection: ChangeDetectionStrategy.Detached,
  pipes: [ShortDescriptionPipe]
})
export class SearchComponent {
  constructor(postService: PostService, userService: UserService, params: RouteParams) {
    this._postService = postService;
    this._userService = userService;    
    this._params = params; 
  }

  ngOnInit() {//searchPosts
    this._postService.refreshPosts(this._params.get('term'));
  }

  getRemotePosts() {
    return this._postService.remotePosts;
  }
}
