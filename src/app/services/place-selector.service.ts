import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Suggestion } from 'src/app/models/suggestion.int';
import { CREDS } from '../../../_creds';

@Injectable({
  providedIn: 'root'
})
export class PlaceSelectorService {

  private placesURL = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${ CREDS.placeAPIkey }&inputtype=textquery&fields=formatted_address,name,place_id,types,plus_code&input=wrocław,`;

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
          this.placeSuggestions = (resp as any).candidates;
          this.placeSuggestionsStream.next(this.placeSuggestions);
        });
  }

  saveResult(localStorageName: string, s: Suggestion): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!!localStorage) {
        localStorage.setItem(localStorageName, JSON.stringify(s));
        resolve(true);
      } else {
        reject('localStorage API not found. Please update your browser.');
      }
    });
  }
}
