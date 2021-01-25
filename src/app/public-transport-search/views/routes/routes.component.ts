import { Suggestion } from './../../models/suggestion.int';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStreamsService } from '../../services/data-streams.service';

@Component({
  selector: 'app-destination-selector',
  template: `
    <div class="d-flex flex-column align-items-center">
      <h1 class="h4 mt-5 pt-5 text-center">Suggested routes for trip:</h1>
      <p class="col-8">
        <small><b>from: </b>{{ startLocation.description.replace(', Wrocław, Polska', '') }}
          <br><b>to: </b>{{ destination.description.replace(', Wrocław, Polska', '') }}</small>
      </p>
      <div *ngIf="!!startLocation && !!destination" class="col-8">
        <app-route-suggestions  [startID]="startLocation.place_id"
                                [endID]="destination.place_id"
        ></app-route-suggestions>
      </div>
    </div>
  `
})
export class RoutesComponent implements OnDestroy {

  startLocation: Suggestion;
  destination: Suggestion;

  constructor(private dataStreamsService: DataStreamsService) {
    this.dataStreamsService.getDestinationStream()
        .subscribe(dest => {
          this.destination = dest; });

    this.dataStreamsService.getStartLocationStream()
        .subscribe(start => this.startLocation = start);
  }

  ngOnDestroy(): void {
    // this.dataStreamsService.updateDestination();
  }

}
