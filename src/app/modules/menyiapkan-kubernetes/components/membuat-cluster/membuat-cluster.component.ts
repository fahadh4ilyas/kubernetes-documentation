import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-membuat-cluster',
  templateUrl: './membuat-cluster.component.html',
  styleUrls: ['./membuat-cluster.component.css']
})
export class MembuatClusterComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('2. Membuat Cluster');
    this._bottomLinkService.getbottomLink("membuat-cluster");
  }

}
