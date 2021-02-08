import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Suggestion } from './../models/suggestion.int';
import { CREDS } from '../../../../_creds';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // @TODO
})
export class PlaceSelectorService {

  private placesURL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${ CREDS.placeAPIkey }&input=wroc%C5%82aw,`;

  placeSuggestions: Suggestion[];

  placeSuggestionsStream: Subject<Suggestion[]> = new Subject();

  constructor(private http: HttpClient) {  }

  getPlaceSuggestionsStream(): Observable<Suggestion[]> {
    return this.placeSuggestionsStream.asObservable();
  }

  searchQuery(query: string): any {

    return this.http
        .get(this.placesURL + query).pipe(
          pluck('predictions'),
          map((p: any) => p.map(el => ({
            ...el,
            description: el.description.replace(', Polska', '')
          })))
        );
  }
}
