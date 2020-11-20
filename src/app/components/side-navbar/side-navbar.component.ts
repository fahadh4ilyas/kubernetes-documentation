import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { SIDENAVS } from 'src/app/services/sidenavs';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  isCollapsed = true;

  navs = SIDENAVS.slice(1);
  currentUrl: string = "/";
  currentFragment: string = "";

  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
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
