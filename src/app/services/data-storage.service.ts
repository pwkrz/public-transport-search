import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion.int';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  saveStartLocation(s: Suggestion): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!!localStorage) {
        localStorage.setItem('startLocation', JSON.stringify(s));
        resolve(true);
      } else {
        reject('localStorage API not found. Please update your browser.');
      }
    });
  }
}
