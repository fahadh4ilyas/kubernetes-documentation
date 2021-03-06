import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-pods-controller-ii',
  templateUrl: './pods-controller-ii.component.html',
  styleUrls: ['./pods-controller-ii.component.css']
})
export class PodsControllerIiComponent implements OnInit {

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('8. Pods Controller II');
    this._bottomLinkService.getbottomLink("pods-controller-ii");
  }

}
