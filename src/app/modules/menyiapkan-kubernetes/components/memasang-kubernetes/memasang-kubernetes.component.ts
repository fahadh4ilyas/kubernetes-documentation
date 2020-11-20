import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-memasang-kubernetes',
  templateUrl: './memasang-kubernetes.component.html',
  styleUrls: ['./memasang-kubernetes.component.css']
})
export class MemasangKubernetesComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('1. Memasang Kubernetes');
    this.bottomLink = this._bottomLinkService.getbottomLink("memasang-kubernetes");
  }

}
