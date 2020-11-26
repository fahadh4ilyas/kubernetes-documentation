import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-pagenotfound',
  template: `
  <div class="container text-center">
    <h1>404</h1>
    <p>Page Not Found</p>
  </div>
`,
  styles: [
  ]
})
export class PagenotfoundComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('404: Page Not Found');
    this._bottomLinkService.getbottomLink("default");
  }

}
