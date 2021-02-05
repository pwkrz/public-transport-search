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
            const titleOverview = el.steps
              .filter(step => step.travel_mode === 'TRANSIT')
              .map(step => ({
                vehicle: step.transit_details.line.vehicle.name,
                line: step.transit_details.line.short_name
              }));
            const steps = el.steps.map(step => ({text: step.html_instructions}));
            return {titleTime, titleOverview, steps};
        }); });
  }

}
