import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/shared/bottomlink';
import { BottomlinkService } from 'src/app/shared/bottomlink.service';

@Component({
  selector: 'app-membuat-cluster',
  templateUrl: './membuat-cluster.component.html',
  styleUrls: ['./membuat-cluster.component.css']
})
export class MembuatClusterComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('2. Membuat Cluster');
    this.bottomLink = this._bottomLinkService.getbottomLink("membuat-cluster");
  }

}
