import { ActivatedRoute, Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Suggestion } from '../../models/suggestion.int';
import { DataStreamsService } from '../../services/data-streams.service';

@Component({
  selector: 'app-destination-selector',
  templateUrl: './destination-selector.component.html'
})
export class DestinationSelectorComponent {

  startLocation: Suggestion;
  destination: Suggestion | any;
  @ViewChild('routeSuggestions') routeSuggestionsBox: ElementRef;

  constructor(private dataStreamsService: DataStreamsService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.dataStreamsService.getStartLocationStream()
                    .subscribe(start => this.startLocation = start);
    this.activatedRoute.queryParams
                    .subscribe(qParams => {
      if (qParams.place_id && qParams.name) {
        this.destination = qParams;
        setTimeout(() => this.routeSuggestionsBox.nativeElement.scrollIntoView(true, {behavior: 'smooth'}));
      }
    });
  }

  onDestinationSelection(s: Suggestion): void {
    this.dataStreamsService.updateDestination(s)
        .then(() => {
          const place_id = s.place_id;
          const name = s.description.replace(', Polska', '') || 'unspecified';
          this.router.navigate([], {queryParams: {name, place_id}});
        });
  }

}
