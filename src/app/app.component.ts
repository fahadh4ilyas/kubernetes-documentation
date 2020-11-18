import { Component } from '@angular/core';
import { SIDENAVS } from './shared/sidenavs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kubernetes-documentation';

  isCollapsed = true;

  navs = SIDENAVS;
}
