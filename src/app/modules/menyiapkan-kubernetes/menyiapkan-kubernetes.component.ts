import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-menyiapkan-kubernetes',
  templateUrl: './menyiapkan-kubernetes.component.html',
  styleUrls: ['./menyiapkan-kubernetes.component.css']
})
export class MenyiapkanKubernetesComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Menyiapkan Kubernetes');
    this._bottomLinkService.getbottomLink("menyiapkan-kubernetes");
  }
}
