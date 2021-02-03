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
              activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.routeSuggestionService.getRouteSuggestions({
        startID: this.startID,
        endID: this.endID
      })
        .then(response => {
          console.log(response);
          this.routeSuggestions = response.map(el => {
            const titleTime = el.departure_time
              ? `${el.departure_time.text} - ${el.arrival_time.text} (${el.duration.text})`
              : el.duration.text;
            const titleOverview = el.steps
              .filter(step => step.travel_mode === 'TRANSIT')
              .map(step => `${step.transit_details.line.vehicle.name} ${step.transit_details.line.short_name} (stops: ${step.transit_details.num_stops})`).join(' > ');
            const steps = el.steps.map(step => ({text: step.html_instructions}));
            return {titleTime, titleOverview, steps};
        }); });
  }

}
