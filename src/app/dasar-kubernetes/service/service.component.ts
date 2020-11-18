import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/shared/bottomlink';
import { BottomlinkService } from 'src/app/shared/bottomlink.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('5. Service');
    this.bottomLink = this._bottomLinkService.getbottomLink("service");
  }

}
