import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-dasar-kubernetes',
  templateUrl: './dasar-kubernetes.component.html',
  styleUrls: ['./dasar-kubernetes.component.css']
})
export class DasarKubernetesComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Dasar Kubernetes');
    this.bottomLink = this._bottomLinkService.getbottomLink("dasar-kubernetes");
  }

}
