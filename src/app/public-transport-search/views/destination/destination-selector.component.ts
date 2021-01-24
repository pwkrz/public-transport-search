import { Component, OnDestroy, OnInit } from '@angular/core';
import { Suggestion } from '../../models/suggestion.int';
import { DataStreamsService } from '../../services/data-streams.service';

@Component({
  selector: 'app-destination-selector',
  template: `
    <h1 class="display-4 mt-5 pt-5 text-right">Where do you want to go?</h1>
    <p class="lead mb-4 text-right">
      After you choose the destination, we will show you several alternative public transport routes that can get you there.
    </p>
    <app-place-selector
        class="d-flex justify-content-end"
        [placeholder]="'Provide destination'"
        (placeSelected)="onDestinationSelection($event)"
    ></app-place-selector>
  `,
  styles: [
  ]
})
export class DestinationSelectorComponent implements OnDestroy {

  constructor(private dataStreamsService: DataStreamsService) { }

  ngOnDestroy(): void {
    this.dataStreamsService.updateDestination();
  }

  onDestinationSelection(s: Suggestion): void {
    this.dataStreamsService.updateDestination(s);
  }

}
