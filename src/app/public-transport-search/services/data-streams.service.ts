import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Suggestion } from '../models/suggestion.int';

@Injectable({
  providedIn: 'root'
})
export class DataStreamsService {

  startLocationStream: BehaviorSubject<Suggestion | null> = new BehaviorSubject(null);
  destinationStream: BehaviorSubject<Suggestion | null> = new BehaviorSubject(null);

  constructor(private dataStorageService: DataStorageService) { }

  getStartLocationStream(): Observable<Suggestion | null> {
    return this.startLocationStream.asObservable();
  }
  getDestinationStream(): Observable<Suggestion | null> {
    return this.destinationStream.asObservable();
  }

  updateStartLocationStream(s: Suggestion | null = null): Promise<any> {
    const dataStorageMethodWrapper = !!s
        ? () => this.dataStorageService.saveStartLocation(s)
        : () => this.dataStorageService.clearStartLocation();

    return dataStorageMethodWrapper()
            .then(r => {
              this.startLocationStream.next(s);
              return r;
            });
  }

  updateDestination(s: Suggestion | null = null): Promise<boolean> {
    return new Promise(resolve => {
      this.destinationStream.next(s);
      resolve(true);
    });
  }
}
