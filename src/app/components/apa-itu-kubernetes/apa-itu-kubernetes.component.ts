import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-apa-itu-kubernetes',
  templateUrl: './apa-itu-kubernetes.component.html',
  styleUrls: ['./apa-itu-kubernetes.component.css']
})
export class ApaItuKubernetesComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('Apa itu Kubernetes?');
    this.bottomLink = this._bottomLinkService.getbottomLink("apa-itu-kubernetes");
  }

}