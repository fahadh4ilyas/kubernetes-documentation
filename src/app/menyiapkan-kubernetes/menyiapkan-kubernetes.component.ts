import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from '../shared/bottomlink';
import { BottomlinkService } from '../shared/bottomlink.service';

@Component({
  selector: 'app-menyiapkan-kubernetes',
  templateUrl: './menyiapkan-kubernetes.component.html',
  styleUrls: ['./menyiapkan-kubernetes.component.css']
})
export class MenyiapkanKubernetesComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Menyiapkan Kubernetes');
    this.bottomLink = this._bottomLinkService.getbottomLink("menyiapkan-kubernetes");
  }
}
