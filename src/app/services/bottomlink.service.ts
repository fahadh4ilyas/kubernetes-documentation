import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { bottomLink } from './bottomlink';
import { BOTTOMLINKS } from './bottomlinks';

@Injectable({
  providedIn: 'root'
})
export class BottomlinkService {

  bottomLinks = BOTTOMLINKS;

  currentBottomLink!: bottomLink;

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
