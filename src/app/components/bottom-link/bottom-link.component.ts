import { Component, OnInit } from '@angular/core';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-bottom-link',
  templateUrl: './bottom-link.component.html',
  styleUrls: ['./bottom-link.component.css']
})
export class BottomLinkComponent implements OnInit {

  get bottomLink(): bottomLink {
    return this._bottomLinkService.currentBottomLink;
  }

  constructor(private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
  }

}
