import { DataStorageService } from './data-storage.service';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Suggestion } from '../models/suggestion.int';

@Injectable({
  providedIn: 'root'
})
export class DataStreamsService {

  startLocationStream: Subject<Suggestion | null> = new Subject();
  destinationStream: Subject<Suggestion | null> = new Subject();

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

  updateDestination(s: Suggestion | null = null): void {
    this.destinationStream.next(s);
  }
}
