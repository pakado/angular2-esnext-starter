import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import template from './menu.template.html';
import { UserService } from '../../../auth';

const keymap = {
  enter: 13
};


@Component({
  selector: 'top-menu',
  template: template,
  directives: [ROUTER_DIRECTIVES],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MenuComponent {
  

  constructor(userService: UserService, router: Router) {
    this.userService = userService;
    this._router = router;
  }

  getLoggedIn() {
    return this.userService.getLoggedIn();
  }

  logout() {
    this.userService.logout();
    this._router.navigate(['List']);
    return false;
  }

  search($event) {    
      if ($event.target.value !== '') {
        this._router.navigate(['Search', { term: $event.target.value}]);
      }    
  }
}
