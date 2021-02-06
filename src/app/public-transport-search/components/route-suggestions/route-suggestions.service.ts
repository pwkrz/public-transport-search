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
    return new Promise((resolve, reject) => {
      this.http.get(finalURL)
          .subscribe((resp: any) => {
            const formatedResponse = resp.routes
              .map(el => el.legs[0])
              .map(el => {
                const titleTime = el.duration.text;
                const steps = el.steps.map(step => {
                  const result: {[key: string]: string} = {
                    travel_mode: step.travel_mode,
                    instructions: step.html_instructions.replace(', Polska', ''),
                    time: step.duration.text
                  };
                  if (step.travel_mode === 'TRANSIT') {
                    result.vehicle = step.transit_details.line.vehicle.name;
                    result.line = step.transit_details.line.short_name;
                    result.departure_time = step.transit_details.departure_time.text;
                    result.arrival_time = step.transit_details.arrival_time.text;
                    result.stops = step.transit_details.num_stops;
                    result.destination = step.transit_details.headsign;
                    result.arrival_stop = step.transit_details.arrival_stop.name;
                  }
                  return result;
                });
                const titleOverview = steps
                  .filter(step => step.travel_mode === 'TRANSIT');
                return {titleTime, titleOverview, steps};
              });
            resolve(formatedResponse);
          });
    });
  }
}
