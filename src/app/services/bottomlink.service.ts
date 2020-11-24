import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { bottomLink } from './bottomlink';
import { BOTTOMLINKS } from './bottomlinks';

@Injectable({
  providedIn: 'root'
})
export class BottomlinkService {

  currentBottomLink: bottomLink = BOTTOMLINKS["home"];

  bottomLinkChange: Subject<bottomLink> = new Subject<bottomLink>();

  constructor() {
    this.bottomLinkChange.subscribe(
      val => this.currentBottomLink = val
    )
   }

  getbottomLink(type: string) {
    this.bottomLinkChange.next(BOTTOMLINKS[type]);
  }
}
