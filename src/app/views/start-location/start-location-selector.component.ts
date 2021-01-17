import { Suggestion } from 'src/app/models/suggestion.int';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-location-selector',
  template: `
    <app-place-selector
        style="display: block; height: 100vh"
        [placeholder]="'Select start location'"
        [onPlaceSelection]="startLocationSelected"
    ></app-place-selector>
  `,
})
export class StartLocationSelectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  startLocationSelected(s: Suggestion): any {
    console.log(s);
  }

}
