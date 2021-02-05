import { RouteSuggestionsService } from './route-suggestions.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-route-suggestions',
  templateUrl: './route-suggestions.component.html',
  styleUrls: ['./route-suggestions.component.css']
})
export class RouteSuggestionsComponent implements OnInit {

  @Input() startID: string;
  @Input() endID: string;
  @Input() destinationName: string;
  routeSuggestions: Array<{time: string, overview: string, steps: string[]}>;

  constructor(private routeSuggestionService: RouteSuggestionsService,
              public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.routeSuggestionService.getRouteSuggestions({
        startID: this.startID,
        endID: this.endID
      })
        .then(response => {
          console.log(response);
          this.routeSuggestions = response.map(el => {
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
              }
              return result;
            });
            const titleOverview = steps
              .filter(step => step.travel_mode === 'TRANSIT');
            return {titleTime, titleOverview, steps};
        }); });
  }

}
