import { DataStreamsService } from './../../services/data-streams.service';
import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-location-selector',
  template: `
    <app-place-selector
        style="display: block; height: 100%"
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
      .then(r => this.router.navigate(['/destination']))
      .catch(e => { throw Error(e); });
  }

}
