import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-menghapus-node-dari-cluster',
  templateUrl: './menghapus-node-dari-cluster.component.html',
  styleUrls: ['./menghapus-node-dari-cluster.component.css']
})
export class MenghapusNodeDariClusterComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('5. Menghapus Node dari Cluster');
    this.bottomLink = this._bottomLinkService.getbottomLink("menghapus-node-dari-cluster");
  }

}
