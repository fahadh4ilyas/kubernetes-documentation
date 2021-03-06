import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-pods-controller',
  templateUrl: './pods-controller.component.html',
  styleUrls: ['./pods-controller.component.css']
})
export class PodsControllerComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('4. Pods Controller');
    this._bottomLinkService.getbottomLink("pods-controller");
  }

}
