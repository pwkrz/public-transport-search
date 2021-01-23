import { DataStreamsService } from './../../services/data-streams.service';
import { Suggestion } from './../../models/suggestion.int';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-location-selector',
  template: `
    <h1 class="display-4 mt-4">Select a start location</h1>
    <p class="lead mb-4">
      This location will be used as the departure point in all your public transport route searches.<br>You can change the start location at any point.
    </p>
    <app-place-selector
        [placeholder]="'Select start location'"
        [localStorageName]="'start-location'"
        (placeSelected)="startLocationSelected($event)"
    ></app-place-selector>
  `,
})
export class StartLocationSelectorComponent implements OnInit {

  constructor(private router: Router,
              private dataStreamsService: DataStreamsService) { }

  ngOnInit(): void {
  }

  startLocationSelected(s: Suggestion): any {
    this.dataStreamsService.updateStartLocationStream(s)
      .then(() => this.router.navigate(['/destination']))
      .catch(e => { throw Error(e); });
  }

}
