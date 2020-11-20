import { Injectable } from '@angular/core';
import { BOTTOMLINKS } from './bottomlinks';

@Injectable({
  providedIn: 'root'
})
export class BottomlinkService {

  bottomLinks = BOTTOMLINKS;

  constructor() { }

  getbottomLink(type: string) {
    return BOTTOMLINKS[type];
  }
}
