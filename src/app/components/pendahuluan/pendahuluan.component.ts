import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-pendahuluan',
  templateUrl: './pendahuluan.component.html',
  styleUrls: ['./pendahuluan.component.css']
})
export class PendahuluanComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Pendahuluan');
    this.bottomLink = this._bottomLinkService.getbottomLink("pendahuluan");
  }

}
