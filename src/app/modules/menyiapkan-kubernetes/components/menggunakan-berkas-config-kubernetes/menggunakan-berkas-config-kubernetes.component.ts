import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-menggunakan-berkas-config-kubernetes',
  templateUrl: './menggunakan-berkas-config-kubernetes.component.html',
  styleUrls: ['./menggunakan-berkas-config-kubernetes.component.css']
})
export class MenggunakanBerkasConfigKubernetesComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('3. Menggunakan berkas config Kubernetes');
    this._bottomLinkService.getbottomLink("menggunakan-berkas-config-kubernetes");
  }

}
