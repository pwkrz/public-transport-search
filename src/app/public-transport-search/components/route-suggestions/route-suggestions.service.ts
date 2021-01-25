import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CREDS } from '_creds';

@Injectable({
  providedIn: 'root'
})
export class RouteSuggestionsService {

  private directionsURL = `https://maps.googleapis.com/maps/api/directions/json?key=${ CREDS.placeAPIkey }&mode=transit&alternatives=true&origin=place_id:<<startID>>&destination=place_id:<<endID>>`;

  constructor(private http: HttpClient) { }

  getRouteSuggestions(ids: {startID: string, endID: string}): Promise<any> {
    const finalURL = this.directionsURL.replace(/<<(.*?)>>/g, (_, p1) => ids[p1]);
    console.log(ids, finalURL);
    return new Promise((resolve, reject) => {
      this.http.get(finalURL)
          .subscribe((resp: any) => {
            resolve(resp.routes.map(el => el.legs[0]));
          });
    });
  }
}
