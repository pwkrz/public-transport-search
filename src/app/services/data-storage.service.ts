import { Injectable } from '@angular/core';
import { Suggestion } from '../models/suggestion.int';

enum LocalStorageItems {
  StartLocation = 'startLocation',
  Routes = 'routes'
}

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  saveStartLocation(s: Suggestion): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!!localStorage) {
        localStorage.setItem(LocalStorageItems.StartLocation, JSON.stringify(s));
        resolve(true);
      } else {
        reject('localStorage API not found. Please update your browser.');
      }
    });
  }

  getStartLocation(): Suggestion | false {
    const startLocationString = localStorage.getItem(LocalStorageItems.StartLocation);
    if (startLocationString) {
      const startLocation = JSON.parse(startLocationString);
      console.log(startLocation.constructor);
      return startLocation;
    } else {
      return false;
    }
  }
}
