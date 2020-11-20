import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { bottomLink } from 'src/app/services/bottomlink';
import { BottomlinkService } from 'src/app/services/bottomlink.service';

@Component({
  selector: 'app-memasang-lens-tidak-wajib',
  templateUrl: './memasang-lens-tidak-wajib.component.html',
  styleUrls: ['./memasang-lens-tidak-wajib.component.css']
})
export class MemasangLensTidakWajibComponent implements OnInit {

  bottomLink!: bottomLink;

  constructor(private _title: Title,
    private _bottomLinkService: BottomlinkService) { }

  ngOnInit(): void {
    this._title.setTitle('6. Memasang Lens (Tidak Wajib)');
    this.bottomLink = this._bottomLinkService.getbottomLink("memasang-lens-tidak-wajib");
  }

}