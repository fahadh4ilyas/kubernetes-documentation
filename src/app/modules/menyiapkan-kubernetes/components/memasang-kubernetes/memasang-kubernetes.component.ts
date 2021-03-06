import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-memasang-kubernetes',
  templateUrl: './memasang-kubernetes.component.html',
  styleUrls: ['./memasang-kubernetes.component.css']
})
export class MemasangKubernetesComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('1. Memasang Kubernetes');
    this._bottomLinkService.getbottomLink("memasang-kubernetes");
  }

}
