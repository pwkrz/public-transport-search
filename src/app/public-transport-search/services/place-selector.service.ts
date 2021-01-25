import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Suggestion } from './../models/suggestion.int';
import { CREDS } from '../../../../_creds';

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

  search(query: string): any {

    this.http
        .get(this.placesURL + query)
        .subscribe(resp => {
          this.placeSuggestions = (resp as any).predictions;
          this.placeSuggestionsStream.next(this.placeSuggestions);
        });
  }
}
