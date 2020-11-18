import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from '../shared/bottomlink';
import { BottomlinkService } from '../shared/bottomlink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Kubernetes Documentation');
    this.bottomLink = this._bottomLinkService.getbottomLink("home");
  }

}
