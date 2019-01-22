import { Injectable } from '@angular/core';
//import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }
  getPowers(): string[] {
    return ['Super Fly','Really Smart', 'Super Flexible']; 
  }
}
