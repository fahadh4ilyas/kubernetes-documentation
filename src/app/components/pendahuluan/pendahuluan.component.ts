import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-pendahuluan',
  templateUrl: './pendahuluan.component.html',
  styleUrls: ['./pendahuluan.component.css']
})
export class PendahuluanComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Pendahuluan');
    this._bottomLinkService.getbottomLink("pendahuluan");
  }

}
