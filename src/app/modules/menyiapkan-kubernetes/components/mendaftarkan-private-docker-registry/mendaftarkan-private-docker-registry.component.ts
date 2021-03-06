import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-mendaftarkan-private-docker-registry',
  templateUrl: './mendaftarkan-private-docker-registry.component.html',
  styleUrls: ['./mendaftarkan-private-docker-registry.component.css']
})
export class MendaftarkanPrivateDockerRegistryComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('4. Mendaftarkan private Docker registry');
    this._bottomLinkService.getbottomLink("mendaftarkan-private-docker-registry");
  }

}
