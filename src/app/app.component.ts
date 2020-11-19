import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SIDENAVS } from './shared/sidenavs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kubernetes-documentation';

  isNavbarCollapse = true;
  isCollapsed = true;

  navs = SIDENAVS.slice(1);
  currentUrl: string = "/";
  currentFragment: string = "";

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute) {
      this._router.events.subscribe(
        event => {
          if (event instanceof NavigationEnd) {
            this.currentUrl = event.url.split('#')[0];
          }
        }
      );
      this._activatedRoute.fragment.subscribe(
        fragment => this.currentFragment = fragment || ""
      );
  }
}
