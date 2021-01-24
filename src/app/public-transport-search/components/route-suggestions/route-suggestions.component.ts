import { RouteSuggestionsService } from './route-suggestions.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-suggestions',
  templateUrl: './route-suggestions.component.html',
  styleUrls: ['./route-suggestions.component.css']
})
export class RouteSuggestionsComponent implements OnInit {

  @Input() routeStartID: string;
  @Input() routeEndID: string;
  routeSuggestions: Array<{title: string, steps: string[]}>;

  constructor(private routeSuggestionService: RouteSuggestionsService) {
    console.log('routsug', this.routeStartID, this.routeEndID);
    this.routeSuggestionService.getRouteSuggestions({
        startID: this.routeStartID,
        endID: this.routeEndID
      })
        .then(routeSuggestions => this.routeSuggestions = routeSuggestions);
  }

  ngOnInit(): void {
  }

}
